import {
  ClassicModel
} from '../../models/classic.js'
let classicModel = new ClassicModel()

import {
  LikeModel
} from '../../models/like.js'
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    first: false,
    latest: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    classicModel.getLatest((res) => {
      console.log(res)
      this.setData({
        classicData: res
      })
    });

  },

  //喜欢
  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type);

  },

  //下一期
  onNext: function (event) {
    this._updateClassic('next')
  },

  //上一期
  onPrevious: function (event) {
    this._updateClassic('previous')
  },


  _updateClassic:function(nextOrPrevious){
    let index = this.data.classicData.index
    classicModel.getClassic(index,nextOrPrevious, (res) => {
      this.setData({
        classicData: res,
        first:classicModel.isFirst(res.index),
        latest:classicModel.isLatest(res.index)
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