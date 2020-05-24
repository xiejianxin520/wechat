Component({
  properties:{
    single:{
      type:Number,
      value:50
    },
    number:{
      type:Number,
      value:1
    }             
  },
  methods:{
    add(){
      this.properties.number ++;
      this.setData(this.data)
    },
    del(){
      if(this.properties.number === 0){
        wx.showToast({
          title: '已经为0，请不要再增加',
          icon: 'none',
          duration: 1500
        })
        return
      }
      this.properties.number--;
      this.setData(this.data)
      this.triggerEvent("del",this.properties.number)
    },
    add(){
      this.properties.number++;
      this.setData(this.data)
      this.triggerEvent("add",this.properties.number)
    }
  }
})