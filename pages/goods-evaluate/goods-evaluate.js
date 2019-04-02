// pages/goods-evaluate/goods-evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    down:'images/load-more.png',
    loadMessage:'全部',
    num:1
  },

  //查看更多的标题
  down:function(){
    var that =this
    var down =this.data.down
    var loadMessage =this.data.loadMessage
    if (down =='images/load-more.png'){
      down ='images/load-more-up.png'
      loadMessage ='收起'
    }else{
      down = 'images/load-more.png'
      loadMessage = '全部'
    }
    that.setData({
      down:down,
      loadMessage:loadMessage
    })
  },
  //点击更改样式
  changeOil: function (e) {
    console.log(e);
    this.setData({
      num: e.target.dataset.num
    })
  },
  //我的评价
  myEva:function(){
    wx.navigateTo({
      url: '../my-eva/my-eva',
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