// pages/return/return.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
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
                imgurl1:res.tempFilePaths[1],
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})