// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDistance:0,
    moveTransition:"none"
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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