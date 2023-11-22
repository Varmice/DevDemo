// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
//   getInfo(){
//     const {data:res} = await wx.p.request({
//         method:'GET',
//         url:'https://applet-base-api-t.itheima.net/api/get',
//         data:{
//             name:'zs',
//             age:20
//         }
//     })
//     console.log(res)
async getInfo() {
    try {
      const { data: res } = await wx.p.request({
        method: 'GET',
        url: 'https://applet-base-api-t.itheima.net/api/get',
        data: { 
            name:"zs",
            age:18
         },
      });

      // 处理 res 数据
    } catch (error) {
      console.error('Error during getInfo request:', error);
    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})