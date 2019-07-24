//导入行为
import {
  classicBeh
} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager();


Component({
  /**
   * 组件的属性列表
   */

  behaviors: [classicBeh],

  properties: {
    src : String,
    title : String


  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //切换图片 控制音乐的播放与暂停
    onPlay: function (event) {

      if (!this.data.playing) {
        this.setData({
          playing: true
        });
        mMgr.src = this.properties.src
        mMgr.title = 123

      } else {
        this.setData({
          playing: false
        });
        mMgr.pause();
      }
    },



  }
})