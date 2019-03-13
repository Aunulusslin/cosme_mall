// pages/good-detail/good-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551331332346&di=7723e0cd8754ffa77fcb3cc5ba72b65f&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20141224%2F16461373067_1919x1080.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551331332346&di=7723e0cd8754ffa77fcb3cc5ba72b65f&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20141224%2F16461373067_1919x1080.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551331332346&di=7723e0cd8754ffa77fcb3cc5ba72b65f&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20141224%2F16461373067_1919x1080.jpg'
    ],
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