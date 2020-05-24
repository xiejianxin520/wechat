// pages/detail/detail.js
import fetch from '../../utils/fetch.js'
import regeneratorRuntime from '../../utils/runtime.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    detailList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   this.data.id = options.id
  //   this.setData(this.data)
   
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getDetailList()
  },
  async getDetailList(){
    let res = await fetch(`shops/${this.data.id}`)
    this.data.detailList = res.data
    this.setData(this.data)
  },
  //预览图片
  preview(e){
  
    // let urls = e.currentTarget.dataset.urls
    // let current = e.currentTarget.dataset.current

    let {urls,current} = e.currentTarget.dataset
    urls = urls.map( item => item.replace("w.h","1000.1000"))
    current = current.replace('w.h', "1000.1000")
    wx.previewImage({ urls, current})
  }
})