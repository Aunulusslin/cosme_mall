// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkorder: 0, //确认收货则为0
    evalueorder: 0, //待评价则为0
    currtab: 0,
    swipertab: [{
      name: '全部',
      index: 0
    }, {
      name: '待付款',
      index: 1
    }, {
      name: '待发货',
      index: 2
    }, {
      name: '已发货',
      index: 3
    }, {
      name: '待评价',
      index: 4
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var currtab = options.currtab
    var that =this
    console.log("222:" + currtab)
    that.setData({
      currtab:currtab
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },

  getDeviceInfo: function() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },

  /**
   * @Explain：选项卡点击切换
   */
  tabSwitch: function(e) {
    var that = this
    if (that.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function(e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },

  orderShow: function() {
    let that = this
    console.log(that.data.currtab)
    switch (that.data.currtab) {
      case 0:
        that.alreadyShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.lostShow()
        break
      case 3:
        that.sentOrder()
        break
      case 4:
        that.evaOrder()
        break
    }
  },
  alreadyShow: function() {
    this.setData({
      alreadyOrder: [{
        id: "E6899709708708908",
        state: "交易成功",
        time: "2018-09-30 14:00-16:00",
        info: "雅诗兰黛小棕瓶抗蓝光持久保湿",
        url: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0vck5v4baj20u00u07dw.jpg",
        money: "132"
      }, {
        id: "E768970909-079-80-0798",
        state: "交易成功",
        time: "2018-10-12 18:00-20:00",
        info: "雅诗兰黛小棕瓶抗蓝光持久保湿",
        url: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0vck5v4baj20u00u07dw.jpg",
        money: "205"
      }]
    })
  },

  waitPayShow: function() {
    this.setData({
      waitPayOrder: [{
        id: "E768970909-079-80-0798",
        name: "跃动体育运动俱乐部(圆明园店)",
        state: "待付款",
        time: "2018-10-14 14:00-16:00",
        info: "雅诗兰黛小棕瓶抗蓝光持久保湿",
        status: "未开始",
        url: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0vck5v4baj20u00u07dw.jpg",
        money: "186"
      }],
    })
  },

  lostShow: function() {
    this.setData({
      lostOrder: [{
        id: "E768970909-079-80-0798",
        name: "跃动体育运动俱乐部(圆明园店)",
        info: "雅诗兰黛小棕瓶抗蓝光持久保湿",
        state: "待发货",
        time: "2018-10-4 10:00-12:00",
        status: "未开始",
        url: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0vck5v4baj20u00u07dw.jpg",
        money: "122"
      }],
    })
  },

  evaOrder: function() {
    this.setData({
      evaOrder: [{
        id: "E768970909-079-80-0798",
        name: "跃动体育运动俱乐部(圆明园店)",
        info: "雅诗兰黛小棕瓶抗蓝光持久保湿",
        state: "待发货",
        time: "2018-10-4 10:00-12:00",
        status: "未开始",
        url: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0vck5v4baj20u00u07dw.jpg",
        money: "122"
      }],
    })
  },

  sentOrder: function() {
    this.setData({
      sentOrder: [{
        id: "E768970909-079-80-0798",
        name: "跃动体育运动俱乐部(圆明园店)",
        info: "雅诗兰黛小棕瓶抗蓝光持久保湿",
        state: "已发货",
        time: "2018-10-4 10:00-12:00",
        status: "未开始",
        url: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0vck5v4baj20u00u07dw.jpg",
        money: "122"
      }],
    })
  },


  // 确认收货
  checkstatus: function() {
    var that = this
    wx.showModal({
      title: '确认收货',
      content: '确认收货后，订单交易完成，钱款将立即到达商家账户',
      success: function(res) {
        if (res.confirm) {
          console.log('确定')
          wx.showToast({
            title: '收货成功',
            icon: 'success',
            duration: 2000
          })
          that.setData({
            checkorder: 1
          })
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  },

  // 跳转评价页
  evaluestatus: function() {
    wx.navigateTo({
      url: '../evaluate/evaluate',
    })
    var that=this
    that.setData({
      evalueorder:1
    })
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