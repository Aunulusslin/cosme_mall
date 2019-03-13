// components/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navbar: ['珠宝', '办公', '食品', '母婴', '珠宝', '办公', '食品', '母婴','珠宝', '办公', '食品', '母婴'],
    currentTab: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navbarTap: function (e) {
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    }
  }
})