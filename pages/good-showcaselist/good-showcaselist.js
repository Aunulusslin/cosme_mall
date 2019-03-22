// pages/good-showcaselist/good-showcaselist.js
var a = getApp();
var globalData = a.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var showcaseId = options.showcaseId
    var that=this
    let sortupUrl = globalData.domainNameA + 'showcase/listShowcaseGoods/' + showcaseId
    a.appRequest('get', sortupUrl, {}, (res) => {
      let data = res.data
      console.log(data.goodsList)
      that.setData({
        caseArray: data.goodsList,
        img: globalData.domainNameB,
        showcaseBanner: data.showcaseBanner
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg)
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