import fetch from '../../utils/fetch.js'
import regeneratorRuntime from '../../utils/runtime.js'
Page({

  /**
   *   判断是否还有更多的数据
      获取到总的条数/pageSize  总的页数  current: 当前的页数
      如果当前的页数 >= 总的页数，  hasMore就应该是flase
   */
  data: {
    list:[],
    id:1,
    current:1,
    pagesize:10,
    hasMore:true
  },
  // 页面加载的时候，获取到的id值
  // 页面加载的时候，获取到的id值
  onLoad(query) {
    this.data.id = query.id
    this.setData(this.data)
  },
  //设置标题
  async onReady(){
    const res = await fetch(`categories/${this.data.id}`)
    // console.log(res)
    wx.setNavigationBarTitle({
      title:res.data.name
    })
    console.log('ready')
  },
 onShow(){
   this.getShopsList()
  },
  async getShopsList(){

    const { id, current, pagesize,list } = this.data
    const res = await fetch(`categories/${id}/shops?_page=${current}&_limit=${pagesize}`)
    // this.data.list = res.data
    // // 有问题： 我们不能把原来的数据给丢了，应该是往数组中添加即可
    // // 展开了原来的数组中的数据， 加上了res.data请求回来的数据
    this.data.list = [...list,...res.data]
    // 判断是否还有更多的数据,以至于触底后别再发送请求,不能等于
    console.log(res)    
    let total = res.header["x-total-count"]
    console.log('ss',total)
    this.data.hasMore = this.data.current < Math.ceil(total/this.data.pagesize)
    this.setData(this.data)
  },
  //页面下拉触底函数
  onReachBottom(){
    // 判断是否还有更多的数据,以至于触底后别再发送请求,不应该让current+1并且发送ajax
    if(!this.data.hasMore)return
    this.data.current ++ 
    this.setData(this.data)
    this.getShopsList()
  },
  //页面上拉刷新
  onPullDownRefresh(){
    this.data.current =1 
    this.data.list = [] // 把shopList清空,防止一直继续加
    this.getShopsList()
  }
})