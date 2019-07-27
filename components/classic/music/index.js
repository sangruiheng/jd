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
    src: String,
    title: String


  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },


  attached: function (event) {
    this._recoverStatus()
    this._monitorSwitch()
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

    //切换组件时暂停图标的切换
    _recoverStatus: function () {
      //当前没有音乐播放
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      //当前有音乐播放并且路径一样
      if (mMgr.src == this.properties.src) {
        this.setData({
          playing: true
        })
      }

    },


    //小程序音乐总控开关切换状态同步
    _monitorSwitch:function(){

      //音乐播放回调事件
      mMgr.onPlay(()=>{
        this._recoverStatus()
      })

      //音乐暂停回调事件
      mMgr.onPause(()=>{
        this._recoverStatus()
      })

      //总控开关关闭回调事件
      mMgr.onStop(()=>{
        this._recoverStatus()
      })

      //音乐自然播放完成回调事件
      mMgr.onEnded(()=>{
        this._recoverStatus()
      })



    }


  }
})