// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    onHomeImageTap: function() {
        // 使用 wx.switchTab 跳转到 TabBar 页面
        wx.switchTab({
          url: '/pages/shopping/shopping', // shopping 页面的路径
        });
      },
      onHome2ImageTap: function() {
        // 使用 wx.switchTab 跳转到 TabBar 页面
        wx.switchTab({
          url: '/pages/mine/mine', // shopping 页面的路径
        });
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
          title: 'Mine',
        })

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