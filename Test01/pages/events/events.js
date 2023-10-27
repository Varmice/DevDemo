// pages/events/events.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      count:0,
      type:1,
      flag:true,
      array:['Apple','Huawei','xiaomi'],
      userlist:[
          {id: 1,name: 'Tom'},
          {id: 2,name: 'Merry'},
          {id: 3,name: 'Mike'}
      ]

  },
//Button + 1
  ChangeCount() {
    this.setData({
        count: this.data.count + 1
    })
  },
  PlusTwo(e){
        this.setData({
            count: this.data.count + e.target.dataset.info
        })
  },
  inputa(e){
      //console.log(e.detail.value)
      this.setData({
          msg:e.detail.value
      })
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