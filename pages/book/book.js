import {
  BookModel
} from '../../models/book.js'
let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //promise错误用法 回调地狱
   /*  let hotList = bookModel.getHotList()
    hotList.then((res) => {
      console.log(res)
      bookModel.getMyBookCount()
        .then((res) => {
          console.log(res)
          bookModel.getMyBookCount()
            .then(res => {
              console.log(res)
            })
        })
    }) */

    //正确pormise用法
/*     bookModel.getHotList()
    .then((res) => {
      console.log(res)
      return bookModel.getMyBookCount()
    })
    .then(res=>{
      console.log(res)
      return bookModel.getMyBookCount()
    })
    .then(res=>{
      console.log(res)
    }) */

    bookModel.getHotList()
    .then(res=>{
      this.setData({
        books:res
      })
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