var a = getApp();
var globalData = a.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  topay: function (e) {
    var ordersSn = this.data.advTaskSn
    var token = wx.getStorageSync("token")
    wx.request({
      url: globalData.baseurl + '/pay?ordersSn=' + ordersSn,
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'token': token
      },
      success(res) {
        wx.requestPayment({
          timeStamp: res.data.data.timeStamp,
          nonceStr: res.data.data.nonceStr,
          package: res.data.data.packages,
          signType: 'MD5',
          paySign: res.data.data.paySign,
          success(res) {
            console.log("支付成功")
            wx.navigateTo({
              url: '../msg/msg_task_success',
            })
          },
          fail(res) {

          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var advTaskSn = options.advTaskSn
    var advTaskTotalPrice = options.advTaskTotalPrice
    this.setData({
      advTaskSn: advTaskSn,
      advTaskTotalPrice: advTaskTotalPrice
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