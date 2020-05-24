// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, name: 'zs' },
      { id: 2, name: 'ls' },
      { id: 3, name: 'ww' },
    ]
  },
  fn(){
    console.log('儿子按钮触法')
  },
  parentfn(){
    console.log('父亲触法了')
  },
  del(e){
     // 如何获取到删除的id
    // 通过事件对象的 e.currentTaget可以获取到当前元素
    // 可以通过当前元素的 dataset属性获取到自定义属性
      // console.log(e)
    // console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.index)
     let idx = e.currentTarget.dataset.index
      this.data.list.splice(idx,1)
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