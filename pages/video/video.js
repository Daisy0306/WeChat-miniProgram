// pages/video/video.js
import request from "../../utils/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList:[],
    currentId: 58100 // null
  },

  // 判断当前点击的导航中的哪一项
  // 通过自定义属性 data-id 进行传参
  changeId(event){
    // console.log(event.currentTarget.dataset.id);
    this.setData({
      currentId:event.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // 请求视频导航列表
    const result = await request("/video/group/list");
    //console.log(result);
    this.setData({
      videoList:result.data.slice(0,10),
      
       // 设置当前默认显示下划线的为第一个
      //currentId:videoList.data[0].id
    })
    //console.log(this.data.videoList)

    // 请求下方视频
    let videoListData = await request('/video/group', { id: 58100})
    //console.log('videoListData', videoListData) // videoListData {msg: "需要登录", code: 301}
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