// components/like/index.js
Component({
  /**
   * 组件的属性列表 (从外部传来的属性)
   */
  properties: {
    like: {
      type: Boolean,
    },
    count: {
      type: Number,
    }
  },

  /**
   * 组件的初始数据 (内部属性)
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1
      console.log(count)
      this.setData({
        count: count,
        like: !like
      })
    }
  }
})