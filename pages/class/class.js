// pages/class/class.js
var a = getApp();
var globalData = a.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [{
      name: "首页", //文本
      current: 0, //是否是当前页，0不是  1是
      style: 0, //样式
      imgUrl: '/images/home2.png',
      curUrl: '/images/home1.png',
      ico: 'icon-qiugouguanli', //不同图标
      fn: '', //对应处理函数
      url: '../../pages/index/index',
    }, {
      name: "分类",
      current: 1,
      style: 0,
      imgUrl: '/images/class2.png',
      curUrl: '/images/class1.png',
      ico: 'icon-mingpianjia',
      fn: '',
      url: '/pages/class/class',
    }, {
      name: "社区",
      current: 0,
      style: 0,
      ico: '',
      fn: '',
      imgUrl: '/images/community2.png',
      curUrl: '/images/community1.png',
      url: '/pages/community/community',
    }, {
      name: "购物车",
      current: 0,
      style: 3,
      imgUrl: '/images/cart2.png',
      curUrl: '/images/cart1.png',
      ico: 'icon-yikeappshouyetubiao35',
      url: '/pages/cart/cart'
    }, {
      name: "个人中心",
      current: 0,
      style: 0,
      imgUrl: '/images/per2.png',
      curUrl: '/images/per2.png',
      ico: 'icon-wode',
      fn: '',
      url: '/pages/personal/personal',
    }, ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    let url = a.globalRequestUrl('domainNameA', 'classA');
    a.appRequest('get', url, {}, (res) => {
      let data = res.data
      data.forEach(item => {
        item.goodsClassBanner = globalData.domainNameB + item.goodsClassBanner
      })
      that.setData({
        cateItems: data,
        fistGoodsClassId:data[0].goodsClassId
      })
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