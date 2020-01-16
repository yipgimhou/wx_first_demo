Page({

  /**
   * 页面的初始数据
   */
  data: {
    // navs: [
    //   { id: 1, name: "项目1" },
    //   { id: 2, name: "项目2" },
    //   { id: 3, name: "项目3" },
    //   { id: 4, name: "项目4" }
    // ],
    // tests:[
    //   {
    //     id:1,
    //     content:["hello","mina"]
    //   },
    //   {
    //     id: 2,
    //     content: ["hello", "world"]
    //   }
    // ]
    swiper_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success:(res)=>{
        this.setData({
          swiper_list:res.data.message
        })
      }
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