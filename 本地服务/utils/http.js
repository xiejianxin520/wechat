//1.根路径
let baseUrl = "https://locally.uieee.com/";//具体接口域名根据你的实际情况填写

//传入三个参数，methods，url,param
const http = ( methods,url,param) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl+url,
      method: methods,
      data:param,
      header: {
        'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        resolve(res);
      },
      fail: function (err) {
        reject(err)
      }
  })
  })
}



// get方法
const getJSON = (url, param) => {
  return http(
    "get",
      url,
     param   
)
}
//post
const postJSON = (url) => {
  return http(
    "post",
    url,
    param
  )
}


module.exports = {
  getJSON,
  postJSON  
}

