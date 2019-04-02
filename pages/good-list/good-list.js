var a = getApp();
var globalData = a.globalData
Page({
  /**
   * 页面的初始数据
   */
  data: {
    saleSortFlat:'',
    priceSortFlat:'',
    imageurl1: "/images/sort-tip_05.png",
    daindex1: 0,
    imageurl2: "/images/sort-tip_05.png",
    daindex2: 0
  },
  /*  tab   */
  choosesort1: function(e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageurl1: "/images/sort-tip_05.png",
        daindex1: 1,
        priceSortFlag: 2
      })
      this.sortup()
    } else {
      this.setData({
        imageurl1: "/images/sort-tip_03.png",
        daindex1: 0,
        priceSortFlag: 1
      })
      this.sortup() 
    }
  },
  choosesort2: function(e) {
    if (this.data.daindex2 == 0) {
      this.setData({
        imageurl2: "/images/sort-tip_05.png",
        daindex2: 1,
        saleSortFlag: 4
      })
    this.sortup()
    } else {
      this.setData({
        imageurl2: "/images/sort-tip_03.png",
        daindex2: 0,
        saleSortFlag: 3
      })
      this.sortup()
    }
  },
  sortup: function() {
    var that = this
    var saleSortFlag = that.data.saleSortFlag
    var priceSortFlag = that.data.priceSortFlag
    let sortupUrl = globalData.domainNameA + 'goodsClass/screeningGoodsList/' + that.data.goodsClassId + '?priceSortFlag=' + priceSortFlag + '&saleSortFlag=' + saleSortFlag
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
  onLoad: function(options) {
    var goodsClassId = options.goodsClassId
    var that = this
    let url = globalData.domainNameA + 'goodsClass/goodsList/' + goodsClassId
    a.appRequest('get', url, {}, (res) => {
      let data = res.data.content
      that.setData({
        dataList: data,
        img: globalData.domainNameB,
        goodsClassId: goodsClassId
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