//引入公共路径
import config from "./config.js";
export default function(url,data={},method="GET"){
  return new Promise(function(resolve,reject){
    wx.request({
      url:config.mpHost + url,
      data,
      method,
      header:{
        cookie:JSON.parse(wx.getStorageSync('cookies')||"[]").toString()
      },
      success: (res) => {
        // data的isLogin属性如果有值，就说明本次响应式登录接口的响应
        if(data.isLogin){
          // 将cookies保存到Storage中
          let cookies = res.cookies;
          wx.setStorage({
            key:"cookies",
            data:JSON.stringify(cookies)
          })
         // console.log("cookies",cookies);
        }
        resolve(res.data);
      }
    })
  })
}