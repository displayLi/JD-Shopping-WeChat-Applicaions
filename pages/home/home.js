// pages/home/home.js
const link = require('../../utils/common')
const app = getApp()
var swiperHeight;

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    ctrlColor: 'rgba(255,255,255,.5)',
    ctrlCurrentColor: 'white',
    navList: [],
    quicks: [],
    pageRow: [],
    scrollFlag: false
  },
  // 页面加载
  onLoad(options) {
    // 显示loading
    link.showLoading()

    // 请求首页数据
    link.ajax({ url: `${app.globalData.defaultURL}/api/profiles/homepage` }, ({ data: res }) => {
      // 关闭loading
      link.hideLoading()

      // 把请求到的值给轮播图的数组
      this.setData({
        imgUrls: res.swipers,
        navList: res.logos,
        quicks: res.quicks,
        pageRow: res.pageRow
      })
    })
  },
  // 监听滚动条改变搜索框背景
  onPageScroll({ scrollTop: val }) {
    wx.createSelectorQuery()
      .selectAll('.swiper-item')
      .boundingClientRect(rect => {
        swiperHeight = rect[0].height
      }).exec()

    if (val >= swiperHeight) {
      this.setData({
        scrollFlag: true
      })
    } else {
      this.setData({
        scrollFlag: false
      })
    }
  }
})
