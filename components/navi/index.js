// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean, //是否第一期
    latest: Boolean //是否最后一期
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onLeft: function (event) {
      //触发自定义事件 传递到page页面
      if (!this.properties.latest) {  //当前期刊为最新一期时 不触发
        this.triggerEvent('right', {}, {});

      }
    },

    onRigh: function (event) {
      if (!this.properties.first) {
        this.triggerEvent('left', {}, {});
      }
    }



  }
})