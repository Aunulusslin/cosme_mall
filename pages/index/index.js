//index.js
//获取应用实例
var a = getApp();
var globalData = a.globalData;
Page({
  data: {
    imgUrls: [
      'https://wx1.sinaimg.cn/mw690/6ae8240agy1g0qrid218tj20ku0su46d.jpg',
      'https://wx2.sinaimg.cn/mw690/6ae8240agy1g0qrif6912j20j60tcn7p.jpg',
      'https://wx1.sinaimg.cn/mw690/6ae8240agy1g0qrid0toqj20ku0su479.jpg'
    ],
    seminarlist: [{
        seminarPic: "https://wx2.sinaimg.cn/mw690/6ae8240agy1g0fgi71t5aj20u00u0u0x.jpg"
      },
      {
        seminarPic: "https://wx4.sinaimg.cn/mw690/6ae8240aly1fzq1mh87j2j212c12c7m8.jpg"
      },
      {
        seminarPic: "https://wx4.sinaimg.cn/mw690/6ae8240agy1g0nfus1ouej20ku112tlw.jpg"
      },
      {
        seminarPic: "https://wx4.sinaimg.cn/mw690/889de2c7ly1fz1s22di3ej20u012uhdu.jpg"
      }
    ],
  },
  //事件处理函数
  onShow: function() {
    var that = this
    wx.request({
      url: globalData.baseurl + '/navigation/list',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data)
        that.setData({
          navigationList: res.data.data
        })
      },
    })
  },
  onLoad: function() {},
})