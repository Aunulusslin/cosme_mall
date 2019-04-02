// pages/add-list/add-list.js
var a = getApp();
var globalData = a.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //编辑地址
  editAdd:function(){
    wx.navigateTo({
      url: '../add-address-edit/add-address-edit',
    })
  },
  toadd: function() {
    wx.navigateTo({
      url: '../add-address/add-address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    let mayAddressUrl = a.globalRequestUrl('domainNameA', 'addressA')
    //我的收货地址
    a.appRequest('get', mayAddressUrl, {}, (res) => {
      var address = res.data
      that.setData({

      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
  },
  //删除地址确认
  deleteAdd:function(){
    wx.showModal({
      title: '提示',
      content: '确认要删除该地址吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
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