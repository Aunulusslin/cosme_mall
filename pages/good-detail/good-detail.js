// pages/good-detail/good-detail.js
var a = getApp();
var globalData = a.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    domainB: globalData.domainNameB,
    num: 1,
    hiddenName: true,
    hiddenNow: false,
    imgurl: globalData.domainNameB,
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
  },
  tocheck: function() {
    wx.navigateTo({
      url: '../good-submit/good-submit',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    console.log(options)
    let goodsId = options.goodsId
    console.log("goodsId:" + goodsId)
    this.setData({
      goodsId: goodsId
    })
    let detailUrl = globalData.domainNameA + globalData.classB + goodsId
    let imgurl = globalData.domainNameA + 'goodsDetail/' + goodsId
    let goodsLikeUrl = globalData.domainNameA + 'goods/likeGoods'
    a.appRequest('get', detailUrl, {}, (res) => {
      let data = res.data
      var words = res.data.goodsMorePic //字符串中间已特殊符号隔开
      var words = words.split(",")
      that.setData({
        imgUrls: words,
        goodsName: data.goodsName,
        goodsDescription: data.goodsDescription,
        goodsPrice: data.goodsPrice,
        goodsSaleNum: data.goodsSaleNum,
        goodsPic:data.goodsPic
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg)
    })
    //富文本
    a.appRequest('get', imgurl, {}, (res) => {
      let data = res.data
      // WxParse.wxParse('article', 'html', res.data.goodsContent, that, 0);
      // console.log("dddddddd:" + res.data.goodsContent)
      console.log("fuwenben:" + data.goodsContent.substring(13, 65))
      that.setData({
        // goodsContent: res.data.goodsContent,
        goodsContent: data.goodsContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')

      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg)
    })

    //猜你喜欢
    a.appRequest('get', goodsLikeUrl, {}, (res) => {
      let data = res.data
      that.setData({
        likeGoodsList: res.data.content
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg)
    })
  },
  //显示与隐藏
  addMyCart: function(e) {
    //显示与隐藏
    this.setData({
      hiddenName: !this.data.hiddenName,
      hiddenNow: this.data.hiddenNow,
      type: e.currentTarget.dataset.type
    })
  },
  translatex: function(e) {
    this.setData({
      hiddenName: !this.data.hiddenName,
      hiddenNow: this.data.hiddenNow,
      type: e.currentTarget.dataset.type
    })
  },

  /* 点击减号 */
  bindMinus: function() {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },

  /* 点击加号 */
  bindPlus: function() {
    var num = this.data.num;
    var that = this
    var goodsContent = that.data.goodsContent
    // 不作过多考虑自增1  
    if (num < goodsContent.goodsStorage) {
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '当前选择商品数量大于库存数量',
        confirmText: "确定",
        cancelText: "取消",
        success: function(res) {
          console.log(res);
          if (res.confirm) {

          } else {}
        }
      });
    }
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