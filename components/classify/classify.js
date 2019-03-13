// components/classify/classify.js
Component({
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // imgUrl:{
    //   type:String,
    //   value: "https://xcx.laicaishi.com/file/upload/",
    // },
    // navigationPic:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    navigationList: [{
        navigationId: 1,
        navigationName: "理财师",
        navigationPic: "http://xcx.carBase.vip/file/upload/20190311152727827482.jpg",
      },
      {
        navigationId: 2,
        navigationName: "金融资讯",
        navigationPic: "http://xcx.carBase.vip/file/upload/20190311152817020335.jpg",
      },
      {
        navigationId: 3,
        navigationName: "理财观点",
        navigationPic: "http://xcx.carBase.vip/file/upload/20190311152654468593.jpg",
      },
      {
        navigationId: 4,
        navigationName: "全部评价",
        navigationPic: "http://xcx.carBase.vip/file/upload/20190311152654468593.jpg",
      },
      {
        navigationUrl: "../return/return",
        navigationId: 5,
        navigationName: "退货",
        navigationPic: "http://xcx.carBase.vip/file/upload/20190311152717492617.jpg",
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //导航
  }
})