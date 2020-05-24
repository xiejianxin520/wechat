// pages/setData/setData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"小程序数据"
  },
  refn(){
    //第一种
    // this.data.msg = "数据被修改了"
    // this.setData(this.data)

//当js中的data发生变化，视图不会跟着改变，所以要用setData同步 

    //第二种方法
    this.setData({
      msg:"数据被修改了第二种方法"
    })  
  },
  input(e){
       // 1. 这里应该获取到文本框的值
    // 2. 调用setData方法才修改data中的数据
    // console.log(e.detail.value)
    this.data.msg = e.detail.value
    console.log(this.data.msg)
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