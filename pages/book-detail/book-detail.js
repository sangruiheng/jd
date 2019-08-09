import {BookModel} from '../../models/book.js'

import {LikeModel} from '../../models/like.js'

let bookModel = new BookModel()

let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bid = options.bid;
    let detail = bookModel.getDetail(bid);
    let comments = bookModel.getComments(bid);
    let likeStatus = bookModel.getLikeStatus(bid);


    Promise.all([detail,comments,likeStatus])
    .then(res=>{
      console.log(res)
      this.setData({
        book:res[0],
        comments:res[1].comments,
        likeStatus:res[1].like_status,
        likeCount:res[2].fav_nums
      })
    })


    // detail.then((res) => {
    //   console.log(res);
    //   this.setData({
    //     book: res
    //   });
    // });

    // comments.then((res) => {
    //   console.log(res);
    //   this.setData({
    //     comments: res.comments
    //   });
    // });

    // likeStatus.then((res) => {
    //   console.log(res);
    //   this.setData({
    //     likeStatus: res.like_status,
    //     likeCount: res.fav_nums
    //   });
    // });
  },

  onLike(event){
    let like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel,this.data.book.id,400)
  },

  onFakePost(evnet){
    this.setData({
      posting:true
    })
  },

  onCancel(event){
    this.setData({
      posting:false
    })
  },

  onPost(event){
    let comment = event.detail.text || event.detail.value

    if(!comment){
      return
    }

    if(comment.length > 12){
        wx.showToast({
          title:'短评最多12个字',
          icon:'none'
        })
    }

    bookModel.postComment(this.data.book.id, comment)
    .then(res => {
      wx.showToast({
        title:'+1',
        icon:'none'
      })
    })

    //将点击的评论 加到上面的数组中
    this.data.comments.unshift({
      content:comment,
      nums:1
    })

    //更新数组
    this.setData({
      comments:this.data.comments,
      posting:false
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