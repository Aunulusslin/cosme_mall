//app.js
App({
  onLaunch: function() {
    wx.login({
      success(res) {
        console.log("res.code:"+res.code)
        if (res.code) {
          wx.request({
            url: 'http://xmsmoo.natapp1.cc/api/login?code=' + res.code,
            method: 'GET',
            header: {},
            success(res) {
              console.log("login:  " + res.data.data.token)
              wx.setStorageSync("token", res.data.data.token)
              wx.setStorageSync("sessionKey", res.data.data.sessionKey)
              var memberNickname = res.data.data.memberNickname
              if (memberNickname == null) {
                wx.navigateTo({
                  url: '../authorization/authorization',
                })
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  /**
   * methods： 请求方式
   * url: 请求地址
   * data： 要传递的参数
   * callback： 请求成功回调函数
   * errFun： 请求失败回调函数
   */
  appRequest(methods, url, data, callback, errFun) {
    wx.request({
      url: url,
      method: methods,
      header: {
        'content-type': methods == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
        'shopId': 1,
        'token':wx.getStorageSync('token')
      },
      dataType: 'json',
      data: data,
      success: function(res) {
        callback(res.data);
      },
      fail: function(err) {
        errFun(err);
      }
    })
  },
  //全局请求URL处理函数
  globalRequestUrl(domainName, site) {
    return this.globalData[domainName] + this.globalData[site]
  },

  //全局所有请求Url
  globalData: {
    bounced:false,
    userInfo: null,
    sessionkey: null,
    // domainNameA: 'http://api.xmsmoo.cn/api/', //请求域名A
    domainNameA: 'http://xmsmoo.natapp1.cc/api/', //请求域名A
    // domainNameA: 'http://192.168.1.13:8080/api/',
    domainNameB: 'http://img.xmsmoo.cn/upload/', //请求域名B(存放图片)
    bounce: "bounced",
    siteA: 'adv/',
    siteB: 'navigation/list/0',
    siteC: "subject/", //专题
    siteD: "floor", //楼层
    siteE: "showcase", //橱窗
    classA: "goodsClass", //商品分类
    classB: "goods/", //商品详情
    searchA: "searchHot", //热门搜索
    searchB: "searchHistory", //历史搜索
    searchC: "searchDefault", //默认搜索
    addressA: "address/listMemberAddress", //  我的收货地址
  }
})