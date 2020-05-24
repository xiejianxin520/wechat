// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    index:0,
    countLeft:0,
    list:[]
    // list:[
    //   {id:1,name:'今天学习了？',completed:true},
    //   {id:2,name:'吃饭了？',completed:false},
    //   {id: 3,name: '喝水？',completed: true }
    // ]
  },
  del(e){
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id;
    let idx = this.data.list.findIndex(item => item.id ===id )
    this.data.list.splice(idx,1)
    this.setData(this.data)
    this.setCount()
    this.save()
  },
  //改变状态
  change(e){
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    this.data.list[index].completed = !this.data.list[index].completed;
    this.setData(this.data)
    this.setCount()
    this.save()
  },
  //全选/反选全部
  toggleAll(){
    //如果有一个或多个没被选中，那就全部被选中
    //如果全部被选中，就全部不选中
    // let flag = this.data.list.every( item => item.completed )
    // // console.log(flag)
    // if(!flag){
    //   this.data.list.forEach( item => item.completed = true)
    // }else{
    //   this.data.list.forEach(item => item.completed = false)
    // }
    // this.setData(this.data)

    //第二种，
    //some就是有一个符合条件就为true,当flag为true就是有一个没被选中
    let flag = this.data.list.some( item => !item.completed)
    //  if(flag){
    //   this.data.list.forEach( item => item.completed = true)
    // }else{
    //   this.data.list.forEach(item => item.completed = false)
    // }   

    this.data.list.forEach( item => item.completed = flag)
    this.setData(this.data)
    this.setCount()
    this.save()
  },
  //获取输入值完成双向绑定,要绑定value ="{{name}}"
  getName(e){
    // console.log(e.detail.value)
    this.data.name = e.detail.value
    this.setData(this.data)
  },
  addToDo(){
    this.data.list.push(
      {id:++this.data.index,name:this.data.name,completed:false}    )
    this.data.name = "";
    this.setData(this.data)
    this.setCount()
    this.save()
  },
  //清除已完成,逆向思维，找出未完成显示出来
  delCompletd(){ 
   let unComList = this.data.list.filter( item => !item.completed)
   this.data.list = unComList
   this.setData(this.data)
    this.setCount()
    this.save()
  },
  //设置未完成的任务个数
  setCount(){
    this.data.countLeft = this.data.list.filter( item => !item.completed).length
    this.setData(this.data)
  },
     // 页面加载的时候,应该去storage中获取数据
  onShow:function(){
    this.data.list = wx.getStorageSync("todos") || []
    if(this.data.list.length >0 ){
      this.data.index = this.data.list[this.data.list.length-1].id
    }else{
      this.data.index = 0
    }
    this.setData(this.data)
    this.setCount()
  },
   // 把数据存储到小程序的storage中
   save(){
     wx.setStorageSync("todos", this.data.list)
   }
  

})