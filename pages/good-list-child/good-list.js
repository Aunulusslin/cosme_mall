var keyWord = wx.getStorageSync('keyWord')
var a = getApp();
var globalData = a.globalData
Page({
  /**
 
   * 页面的初始数据
 
   */
  data: {
    imageurl1: "/images/sort-tip_03.png", //升序图
    daindex1: 0,
    imageurl2: "/images/sort-tip_03.png",
    daindex2: 0,
    loadText: '加载更多',
    duanziInfo: [],
    pageNum: 0,
    loadMoreMessage: '加载更多',
    loadMoreStyle: '',
    noGoods: 'none',
    haveGoods: 'none'
  },

  /*  tab   */
  //dataindex1:价格    dataindex
  choosesort1: function(e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageurl1: "/images/sort-tip_05.png",
        daindex1: 1,
        priceSortFlag: 2
      })
      this.sortup()
    } else {
      this.setData({
        imageurl1: "/images/sort-tip_03.png",
        daindex1: 0,
        priceSortFlag: 1
      })
      this.sortup()
    }
  },
  choosesort2: function(e) {
    if (this.data.daindex2 == 0) {
      this.setData({
        imageurl2: "/images/sort-tip_05.png",
        daindex2: 1,
        saleSortFlag: 4

      })
      this.sortup()
    } else {
      this.setData({
        imageurl2: "/images/sort-tip_03.png",
        daindex2: 0,
        saleSortFlag: 3
      })
      this.sortup()
    }
  },
  sortup: function() {
    var that = this
    var saleSortFlag = this.data.saleSortFlag
    var priceSortFlag = this.data.priceSortFlag

    console.log("saleSortFlag:" + saleSortFlag)
    console.log("priceSortFlag:" + priceSortFlag)
    let sortupUrl = globalData.domainNameA + 'goods/screeningGoodsList?goodsName=' + keyWord + '&priceSortFlag=' + priceSortFlag + '&saleSortFlag=' + saleSortFlag
    // 热门搜索
    console.log(sortupUrl)
    a.appRequest('get', sortupUrl, {}, (res) => {
      let data = res.data
      console.log("热门:" + date)
      that.setData({
        dataList: data,
        img: globalData.domainNameB,
      })
    }, (err) => {
      console.log('请求错误信息：' + err.errMsg);
    })
  },

  /**
 
   * 生命周期函数--监听页面加载
 
   */

  onLoad: function(options) {
    var noGoods
    var haveGoods

    var goodsName = options.goodsName
    console.log("onLoad:" + goodsName)
    var that = this
    var size = 5
    that.setData({
      goodsName: goodsName,
      size: size
    })

    var that = this
    let serUrl = globalData.domainNameA + 'goods/goodsNameLike?goodsName=' + that.data.goodsName
    let thisUrl = encodeURI(serUrl)

    wx.request({
      url: thisUrl,
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/text',
        'shopId': 1,
        'token': wx.getStorageSync('token')
      },
      success: function(res) {
        console.log("last:" + res.data.data.last)
        console.log("first" + res.data.data.first)


        let data = res.data.data.content
        var dataListLength = res.data.data.numberOfElements
        var pageFirst = res.data.data.first
        var pageLast = res.data.data.last

        that.setData({
          dataList: data,
          img: globalData.domainNameB,
          dataListLength: dataListLength,
          pageFirst: pageFirst,
          pageLast: pageLast
        })
        if (dataListLength == 0) {
          that.setData({
            noGoods: '',
            haveGoods: 'none'
          })
        } else {
          console.log('有数据')
          that.setData({
            noGoods: 'none',
            haveGoods: ''
          })
        }
      },
    })
  },

  //加载更多
  loadMore: function() {
    var that = this
    var size = this.data.size
    var dataListLength = that.data.dataListLength
    var loadMoreMessage
    var loadMoreStyle
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 200
    })
    //逻辑判断
    //1.返回页数是否小于五条
    if (dataListLength <= 5) {
      that.setData({
        loadMoreStyle: 'none'
      })
    } else if (dataListLength >= 5) {
      //显示加载更多
      that.setData({
        loadMoreStyle: ''
      })
      if (dataListLength % 2 == 0) {
        size = size + 4
      } else {
        size = size + 5
      }
      if (that.data.pageLast == false) {
        var pageNum = that.data.pageNum
        pageNum = pageNum + 1;
        if (size >= dataListLength) {
          //加到超过第十条的时候
          let serUrl = globalData.domainNameA + 'goods/goodsNameLike?goodsName=' + that.data.goodsName + '&pageNum=' + pageNum
          // 热门搜索
          let thisUrl = encodeURI(serUrl)
          a.appRequest('get', thisUrl, {}, (res) => {
            let data = res.data.content
            console.log("二次搜索:" + res.data.last)
            var pageLast = res.data.last
            console.log(data)
            console.log("666:" + that.data.dataList.concat(data)) //打印拼接之后数据
            if (dataListLength % 2 == 0) {
              size = size + 4
            } else {
              size = size + 5
            }
            that.setData({
              dataList: that.data.dataList.concat(data),
              img: globalData.domainNameB,
              size: size,
              pageLast: pageLast
            })
          }, (err) => {
            console.log('请求错误信息：' + err.errMsg);
          })
        }
      } else {
        if (size >= dataListLength) {
          loadMoreMessage = "没有更多啦"
          that.setData({
            loadMoreMessage: loadMoreMessage
          })
        }
      }
    }
    that.setData({
      size: size,
    })
  },
  // //查看更多
  // setLoading: function(e) {
  //   var that = this
  //   var pageNum = that.data.pageNum
  //   pageNum = pageNum + 1;
  //   that.setData({
  //     pageNum: pageNum
  //   })
  //   console.log("pageNum:" + pageNum)
  //   wx.showToast({
  //     title: '加载中',
  //     icon: 'loading',
  //     duration: 200
  //   })
  //   console.log("热门搜索数据:" + that.data.goodsName)
  //   let serUrl = globalData.domainNameA + 'goods/goodsNameLike?goodsName=' + that.data.goodsName + '&pageNum=' + pageNum
  //   // 热门搜索
  //   let thisUrl = encodeURI(serUrl)
  //   a.appRequest('get', thisUrl, {}, (res) => {
  //     let data = res.data.content
  //     console.log(data)
  //     console.log("666:" + that.data.dataList.concat(data)) //打印拼接之后数据
  //     that.setData({
  //       dataList: that.data.dataList.concat(data),
  //       img: globalData.domainNameB,
  //     })
  //     if (res.data.content != '') {
  //       that.setData({
  //         hasdata: true
  //       })
  //     } else {
  //       console.log('有数据')
  //     }
  //   }, (err) => {
  //     console.log('请求错误信息：' + err.errMsg);
  //   })
  // },
  /**
 
   * 生命周期函数--监听页面初次渲染完成
 
   */

  onReady: function() {



  },



  /**
 
   * 生命周期函数--监听页面显示
 
   */

  onShow: function() {},



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