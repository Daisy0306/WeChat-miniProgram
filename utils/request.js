//引入公共路径
import config from "./config.js";
export default function(url,data={},method="GET"){
  return new Promise(function(resolve,reject){
    wx.request({
      url:config.mpHost + url,
      data,
      method,
      success: (res) => {
        resolve(res.data);
      }
    })
  })
}