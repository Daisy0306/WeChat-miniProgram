// pages/login/login.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    password:""
  },

  // 向事件回调函数内部传参，需要利用标签属性或者自定义属性
  handleChange(event){
    let type = event.currentTarget.id;
    this.setData({
      [type]:event.detail.value
    })
  },

  handlePassword(event){
    this.setData({
      password:event.detail.value
    })
  },

// 登录逻辑
  async handleLogin(){
    // 1.收集表单数据
    let {phone,password} = this.data;

    // 2. 前端表单验证
    let phoneReg = new RegExp(/^1[0-9]{10}/);
    let pwdReg = new RegExp(/[a-zA-Z0-9]{8}/);
    // 先验证手机号是否符合规则
    if(!phoneReg.test(phone)){
      wx.showToast({
        title:"手机号码格式不正确",
        icon:"none"
      })
      return;
    }
    // 手机号验证通过再执行下一步，验证密码
    if(!pwdReg.test(password)){
      wx.showToast({
        title:"密码格式不正确",
        icon:"none"
      })
      return
    }

    // 3. 后端表单验证
    // 发送请求
    let result = await request("/login/cellphone",{phone,password,isLogin:true});
    //console.log("用户信息" + result.profile.stringify()); //打印用户信息，测试请求结果：密码错误等
    // 将用户数据信息保存
    wx.setStorage({
      key:"userInfo",
      data:JSON.stringify(result.profile)
    })
    wx.showToast({
      title: '登录成功',
      icon:"success"
    })
    // 登录成功后跳转到个人中心页面
    wx.switchTab({
      url: '/pages/personal/personal',
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