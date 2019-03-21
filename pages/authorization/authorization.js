var a = getApp();
var globalData = a.globalData;

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getUserInfo: function (e) {
    var sessionKey = wx.getStorageSync("sessionKey")
    let userInfo = {
      "sessionKey": sessionKey,
      "encryptedData": e.detail.encryptedData,
      "iv": e.detail.iv,
      "rawData": e.detail.rawData,
      "signature": e.detail.signature,
      "memberCarOwner": 0,
      "memberStore": 0
    }
    a.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    wx.request({
      url: globalData.domainNameA + 'member/info',
      method: 'POST',
      header: {
        'content-type': 'application/json', // 默认值
        'shopId': 1
      },
      data: userInfo,
      success: function (res) {
        wx.navigateBack()
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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