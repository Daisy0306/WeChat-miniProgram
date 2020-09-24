// pages/personal/personal.js
import request from "../../utils/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDistance:0,
    moveTransition:"none",
    userInfo:{},
    playList:[]
  },

  handleTouchStart(event){
    // 获取第一个手指的Y轴坐标
    this.startY = event.touches[0].clientY;
    //二次下拉时。重置transition状态，放置下拉具有过渡效果
    this.setData({
      moveTransition:"none"
    })
  },

  handleTouchMove(event){
    let moveY = event.touches[0].clientY;
    let moveDistance = Math.floor(moveY-this.startY);
    // 判断临界值：如果手指向上滑动，元素不移动；
    // 手指向下滑动超过80，元素停在80
    if(moveDistance < 0) return;
    if(moveDistance > 80) moveDistance = 80;
    this.setData({
      moveDistance
    })
  },

  handleTouchEnd(){
    // 当手指开启，让元素回到起始位置
    this.setData({
      moveDistance:0,
      moveTransition:"transform 400ms"
    })
  },

  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // 读取 Storage中的数据，更新到data中，进行动态渲染
    let userInfoStr = wx.getStorageSync("userInfo");
    //console.log(userInfoStr);
    if(!this.data.userInfo.nickname && userInfoStr){
      // 如果 Storage 中有存储用户的数据，就更新到data中
      this.setData({
        userInfo:JSON.parse(userInfoStr)
      })
    }
    
    // 获取用户最近播放记录
    let playListData = await request("/user/record",{uid:this.data.userInfo.userId,type:1})
    this.setData({
      playList:playListData.weekData.splice(0,10)
    })
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