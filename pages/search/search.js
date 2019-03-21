// pages/search/search.js
var a = getApp();
var globalData = a.globalData;
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
    var that=this
    let hotUrl = a.globalRequestUrl('domainNameA', 'searchA')
    let hisUrl = a.globalRequestUrl('domainNameA', 'searchB')
    let defUrl = a.globalRequestUrl('domainNameA', 'searchC')
    // 热门搜索
    a.appRequest('get', hotUrl, {}, (res) => {
      let data = res.content
      that.setData({
        hot: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 历史搜索
    a.appRequest('get', hisUrl, {}, (res) => {
      let data = res.content
      that.setData({
        history: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 默认搜索
    a.appRequest('get', defUrl, {}, (res) => {
      let data = res.content
      that.setData({
        searchDefaultValue: data[0].searchDefaultValue
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
  },
  onDelete(event) {
    this.setData({
      q: ""
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