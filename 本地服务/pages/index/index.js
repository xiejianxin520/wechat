
import { getJSON, postJSON } from "../../utils/http.js"
// 导入regeneratorRuntime，就可以让小程序支持async和await
import regeneratorRuntime from '../../utils/runtime.js'

const app = getApp()

Page({
  data:{
    imagelist:[],
    categoryList: []
  },
  onShow(){
    this.getImageList()
    this.getCategoryList()
  },
  //获取滚动照片
 async getImageList(){
    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   method: 'GET',
    //   dataType: 'json',
    //   success: res => {
    //     // console.log(res.data)
    //     this.data.imagelist = res.data
    //     this.setData(this.data)
    //   }
    // })
   const res= await  getJSON("slides")
        this.data.imagelist = res.data
        this.setData(this.data)
  
  },
  //获取九宫格的数据
  async  getCategoryList(){
    const res = await getJSON('categories')
      this.data.categoryList = res.data
      this.setData(this.data)   
  }
})
