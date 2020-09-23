// pages/index/index.js
//引入接口文件
import request from "../../utils/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    recommendList:[],
    rankList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // let result = await request("http://localhost:3000/banner?type=2",{type:2},"GET");
    // let recommendData = await request("http://localhost:3000/personalized", { limit: 50 })
    // this.setData({
    //   bannerList:result.banners,
    //   recommendList:recommendData.result
    // })
    
    // 请求 轮播图数据
    request("/banner", { type: 2}, "GET")
    .then((res) => {
      this.setData({
        bannerList: res.banners,
      })
    });
    // 请求 推荐歌曲
    request("/personalized", { limit: 50 })
    .then((res) => {
      this.setData({
        recommendList: res.result
      })
    });
    // 请求 歌曲排行榜
    let arr = [3,5,6,8,14,20,22,25,26,29];
    let index = 0;
    let topList = [];
    while(index < arr.length){
     let res = await request("/top/list",{idx:index++})
      // .then((res) => {
        let data={
          name:res.playlist.name,
          tracks:res.playlist.tracks.slice(0,3)
        }
        topList.push(data);
        console.log(topList);
        this.setData({
          rankList:topList
        })
      // })
    }
    
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