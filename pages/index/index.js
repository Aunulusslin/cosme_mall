//index.js
//获取应用实例
var a = getApp();
var globalData = a.globalData;
Page({
  data: {
    flag: globalData.bounced,
    navData: [{
      name: "首页", //文本
      current: 1, //是否是当前页，0不是  1是
      style: 0, //样式
      imgUrl: '/images/home2.png',
      curUrl: '/images/home1.png',
      ico: 'icon-qiugouguanli', //不同图标
      fn: '', //对应处理函数
      url: '/pages/index/index',
    }, {
      name: "分类",
      current: 0,
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
        imgUrl: '/images/community2.png',
        curUrl: '/images/community1.png',
      fn: '',
      // adurl: '/pages/community/community',
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
  // 遮罩层隐藏
  conceal: function() {
    var bounced=globalData.bounced
    this.setData({
      flag: true,
      bounced:true
    })
  },

  //事件处理函数
  onShow: function() {},
  onReady: function() {},
  onLoad: function() {
    var that = this
    //首页广告
    let bounceUrl = a.globalRequestUrl('domainNameA', 'bounce')
    let url = a.globalRequestUrl('domainNameA', 'siteA')
    let navUrl = a.globalRequestUrl('domainNameA', 'siteB')
    let subUrl = a.globalRequestUrl('domainNameA', 'siteC')
    let floorUrl = a.globalRequestUrl('domainNameA', 'siteD')
    let caseUrl = a.globalRequestUrl('domainNameA', 'siteE')
    //弹窗
    a.appRequest('get', bounceUrl, {}, (res) => {
      that.setData({
        bouncedImg: globalData.domainNameB + res.bouncedImg
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    //轮播
    a.appRequest('get', url, {}, (res) => {
      let data = res.data.content;
      data.forEach(item => {
        item.advPic = globalData.domainNameB + item.advPic
      })
      that.setData({
        imgUrls: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 首页导航
    a.appRequest('get', navUrl, {}, (res) => {
      let data = res.data
      data.forEach(item => {
        item.navigationPic = globalData.domainNameB + item.navigationPic
      })
      that.setData({
        navigationList: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 首页专题
    a.appRequest('get', subUrl, {}, (res) => {
      let data = res.data.content
      data.forEach(item => {
        item.subjectPic = globalData.domainNameB + item.subjectPic
        that.setData({
          subjectPic: item.subjectPic
        })
      })

    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 楼层
    a.appRequest('get', floorUrl, {}, (res) => {
      let data = res.data
      console.log(data)
      data.forEach(item => {
        item.floorPic = globalData.domainNameB + item.floor.floorPic
        item.goodsList.forEach(item => {
          console.log("2222:" + item.goodsPic)
          item.goodsPic = globalData.domainNameB + item.goodsPic

        })
      })
      that.setData({
        floorList: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
    // 橱窗
    a.appRequest('get', caseUrl, {}, (res) => {
      let data = res.data
      data.forEach(item => {
        item.showcasePic = globalData.domainNameB + item.showcasePic
      })
      that.setData({
        seminarlist: data
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
  },
  onHide: function() {}
})