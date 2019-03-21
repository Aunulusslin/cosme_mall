// pages/good-detail/good-detail.js
var a = getApp();
var globalData = a.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    domainB: globalData.domainNameB,
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
    var that=this
    console.log(options)
    let goodsId = options.goodsId
    console.log("goodsId:" + goodsId)
    this.setData({
      goodsId: goodsId
    })
    let detailUrl = globalData.domainNameA + globalData.classB+goodsId
    let imgurl = globalData.domainNameA + 'goodsDetail/' + goodsId
    a.appRequest('get', detailUrl, {}, (res) => {
      let data = res.data
      var words = res.data.goodsMorePic     //字符串中间已特殊符号隔开
      var words = words.split(",")
      that.setData({
        imgUrls: words,
        goodsName: data.goodsName,
        goodsDescription: data.goodsDescription,
        goodsPrice: data.goodsPrice,
        goodsSaleNum: data.goodsSaleNum
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg)
    })
    //富文本
    a.appRequest('get', imgurl, {}, (res) => {
      let data = res.data
      that.setData({
        goodsContent: data.goodsContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg)
    })
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