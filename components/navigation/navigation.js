// components/navigation/navigation.js
var a = getApp();
var globalData = a.globalData;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cateItems:Array,
    'firstId':{
      type: Number,
      observer: function (firstId, oldVal) {
        console.log(firstId)
        var that =this
        var curNav = firstId
        that.setData({
          curNav: curNav
        })
      }

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgurl: globalData.domainNameB,
    curIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //事件处理函数  
    switchRightTab: function (e) {
      // 获取item项的id，和数组的下标值  
        console.log(e)
      let id = e.target.dataset.id,
        index = parseInt(e.target.dataset.index);

      // 把点击到的某一项，设为当前index  
      this.setData({
        curNav: id,
        curIndex: index
      })
    },
  },
})