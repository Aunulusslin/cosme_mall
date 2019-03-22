// pages/search/search.js
var a = getApp();
var globalData = a.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteyep:1
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
      console.log(data)
      that.setData({
        hot: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 历史搜索
    a.appRequest('get', hisUrl, {}, (res) => {
      let data = res
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
  todetail:function(e){
    wx.setStorageSync('keyWord', e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '/pages/good-list-child/good-list',
    })
  },
  histodetail: function (e) {
    wx.setStorageSync('keyWord', e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '/pages/good-list-child/good-list',
    })
  },
  onDelete(event) {
    this.setData({
      keyWord: ""
    })
  },
  //联想
  inputsearch: function (event) {
    // 如果输入框有内容，展示联想
    var that=this
    if (event.detail.value) {
      that.setData({
        keyWord: event.detail.value,
        autoFocus: true
      });
    } else {

    }
  },
  //键盘搜索
  onConfirm: function (event) {
    var that=this
    if (that.data.keyWord!='') {
      wx.setStorageSync('keyWord', that.data.keyWord)
      wx.navigateTo({
        url: '/pages/good-list-child/good-list',
      })
    } else {
      wx.showToast({
        title: '请重新输入',
        icon: 'none',
        duration: 1500
      })
    }
  },
  delete:function(){
    let deleteUrl = globalData.domainNameA +'searchHistory'
    a.appRequest('delete', deleteUrl, {}, (res) => { 
      console.log(res.msg) 
      this.onLoad()
      this.setData({
        deleteyep:0
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
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