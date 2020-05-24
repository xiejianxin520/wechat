// 封装一个通用的fetch函数，用于发送微信小程序的ajax请求
// 要求：支持promise

function fetch (option){
    // 判断参数的类型， 如果options如果是字符串，把当成url来处理
  // 如果是options是对象，当成参数对象来处理即可
  if(typeof option === "string"){
    let urlvalue = option
    option = {
      url: urlvalue
    }
  }


  return new Promise((resolve,reject) =>{
    wx.request({
      url: `https://locally.uieee.com/${option.url}`,
      method: option.method,
      dataType: option.dataType,
      success:function(res){
        resolve(res);
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}

// 把fetch函数导出去
export default fetch