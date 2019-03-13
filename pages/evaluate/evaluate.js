// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 300, // 最多放多少字
    info: "",
    noteNowLen: 0,//备注当前字数
    levelword: "非常差",
    levelword1: "非常差",
    levelword2: "非常差",
    word: ['非常差', '差  ', '一般 ', '好  ', '非常好'],
    word1: ['非常差', '差  ', '一般 ', '好  ', '非常好'],
    word2: ['非常差', '差  ', '一般 ', '好  ', '非常好'],
    userStars: [
      '../../images/icon-start-full.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png'
    ],
    userStars1: [
      '../../images/icon-start-full.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png'
    ],
    userStars2: [
      '../../images/icon-start-full.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png',
      '../../images/icon-start-emty.png'
    ]
  },
  // 拍照
  addUserScene: function (e) {
    var that = this
    wx.showActionSheet({
      itemList: ['拍照', '从相册选择'],
      success(res) {
        //拍照
        if (res.tapIndex === 0) {
          console.log("暂未开放拍照上传")
        } else {
          wx.chooseImage({
            count: 3,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success(res) {
              console.log(res)
              that.setData({
                imgurl: res.tempFilePaths[0],
                imgurl1: res.tempFilePaths[1],
                imgurl2: res.tempFilePaths[2]
              })
              var token = wx.getStorageSync("token")
              wx.uploadFile({
                url: globalData.baseurl + '/upload/img', // 仅为示例，非真实的接口地址
                filePath: res.tempFilePaths,
                name: 'imageFile',
                header: {
                  'content-type': 'application/json', // 默认值
                  'token': token
                },
                success(res) {
                  console.log("res.data:" + res.data);
                  wx.setStorageSync("image_path", res.data)
                }
              })
              //上传图片到服务器
            }
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 描述星星点击事件
  starTap: function(e) {
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = '/images/icon-start-full.png'
        this.setData({
          number: i,
          levelword: this.data.word[i]
        })
      } else { // 其他是空心
        tempUserStars[i] = '/images/icon-start-emty.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars: tempUserStars,
    })
    console.log(this.data.number)
  },
  // 物流星星点击事件
  starTap1: function(e) {
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars1; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = '/images/icon-start-full.png'
        this.setData({
          number1: i,
          levelword1: this.data.word1[i]
        })
      } else { // 其他是空心
        tempUserStars[i] = '/images/icon-start-emty.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars1: tempUserStars,
    })
    console.log(this.data.number1)
  },
  // 服务星星点击事件
  starTap2: function(e) {
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars2; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = '/images/icon-start-full.png'
        this.setData({
          number2: i,
          levelword2: this.data.word2[i]
        })
      } else { // 其他是空心
        tempUserStars[i] = '/images/icon-start-emty.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars2: tempUserStars,
    })
    console.log(this.data.number2)
  },

  // 监听字数
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({ info: value, noteNowLen: len })

  },
  // 提交清空当前值
  bindSubmit: function () {
    var that = this;
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 1500,
      mask: false,
      success: function () {
        that.setData({ info: '', noteNowLen: 0, flag: 0 })
        wx.navigateTo({
          url: '../my-eva/my-eva',
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})