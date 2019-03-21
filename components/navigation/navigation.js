// components/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cateItems:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgurl: 'http://xcx.carbase.vip/file/upload/',
    curNav: 1,
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
    }
  }
})