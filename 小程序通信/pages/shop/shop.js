// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singel:50,
    total:250,
    num:1,
    inputSingel:0
  },
  del(e){
    // console.log(e.detail)
    this.data.num = e.detail
    this.data.total = e.detail * this.data.singel
    this.setData(this.data)
  },
  add(e){
    this.data.num = e.detail
    this.data.total = e.detail * this.data.singel
    this.setData(this.data)
  },
  changeinput(e){
    this.data.inputSingel = e.detail.value
  },
  confirmChange(){
    this.data.singel = this.data.inputSingel;
    this.setData(this.data)
    this.total()
  },
  total(){
    this.data.total = this.data.singel * this.data.num
    this.setData(this.data)  
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})