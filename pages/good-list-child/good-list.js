var keyWord = wx.getStorageSync('keyWord')
var a = getApp();
var globalData = a.globalData
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageurl1: "/images/sort-tip_03.png",//升序图
    daindex1: 0,
    imageurl2: "/images/sort-tip_03.png",
    daindex2: 0
  },
  /*  tab   */
  choosesort1: function (e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageurl1: "/images/sort-tip_05.png",
        daindex1: 1,
        saleSortFlat:1
      })
      this.sortup()
    } else {
      this.setData({
        imageurl1: "/images/sort-tip_03.png",
        daindex1: 0,
        saleSortFlat:2
      })
      this.sortup()
    }
  },
  choosesort2: function (e) {
    if (this.data.daindex2 == 0) {
      this.setData({
        imageurl2: "/images/sort-tip_05.png",
        daindex2: 1,
        priceSortFlat: 1
      })
      this.sortup()
    } else {
      this.setData({
        imageurl2: "/images/sort-tip_03.png",
        daindex2: 0,
        priceSortFlat: 2
      })
      this.sortup()
    }
  },
  sortup: function () {
    var that = this
    var saleSortFlat = that.data.saleSortFlat
    var priceSortFlat = that.data.priceSortFlat
    let sortupUrl = globalData.domainNameA + 'goods/screeningGoodsList?goodsName=' + keyWord + '&priceSortFlat=' + priceSortFlat+ '&saleSortFlat=' + saleSortFlat
    // 热门搜索
    console.log(sortupUrl)
    a.appRequest('get', sortupUrl, {}, (res) => {
      let data = res.data
      console.log(data)
      that.setData({
        dataList: data,
        img: globalData.domainNameB,
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let serUrl = globalData.domainNameA + 'goods/goodsNameLike?goodsName=' + keyWord
    // 热门搜索
    a.appRequest('get', serUrl, {}, (res) => {
      let data = res.data.content
      console.log(data)
      that.setData({
        dataList: data,
        img: globalData.domainNameB,
      })
      if (data != '') {
        that.setData({
          hasdata: true
        })
      } else {
        console.log('有数据')
      }
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