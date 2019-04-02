// pages/add-address/add-adress.js
import WxValidate from '../../utils/WxValidate.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    /**警告消息*/
    displayWarn: 'display:none',
  },
  // 省市选择
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  newAddress: function() {
    wx.showToast({
      title: '添加成功',
      duration: 1000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /***校验规则 */
    this.initValidate();
  },
  /**
   * 表单验证->(可自定义验证形式)
   */
  showWarnInfo(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })

  },
  formSubmit(e) {
    const params = e.detail.value
    console.log(params)
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showWarnInfo(error)
      return false
    }
    /**
     * 这里添写验证成功以后的逻辑
     * 
     */
    //验证通过以后->
    this.submitInfo(params);
  },
  /**
   * 表单-验证字段
   */
  initValidate() {
    const rules = {
      /**广告名*/
      userName: {
        required: true,
      },
      /**联系电话 */
      photoNumber: {
        required: true,
        tel: true,
      },
      /**详细地址*/
      detailMessage: {
        required: true,
      },
    }
    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      userName: {
        required: '请填写姓名',
      },
      photoNumber: {
        required: '请填写联系电话',
      },
      detailMessage: {
        required: '请填写详细地址',
      },
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
    // // 自定义验证规则
    // this.WxValidate.addMethod('assistance', (value, param) => {
    //   return this.WxValidate.optional(value) || (value.length >= 1 && value.length <= 2)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  },

})
/**
 * 可加入工具集-减少代码量
 */
function showWran(page, error, delayTime, delayMillsecond) {
  let timesRun = 0;
  let interval = setInterval(function() {
    timesRun += delayTime;
    if (timesRun === delayTime) {
      clearInterval(interval);
    }
    page.setData({
      warnInfo: error.msg,
      displayWarn: 'display:none'
    });
  }, delayMillsecond);
  page.setData({
    warnInfo: error.msg,
    displayWarn: 'display:block'
  })
}