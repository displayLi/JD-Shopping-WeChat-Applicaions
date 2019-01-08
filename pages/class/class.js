// pages/class/class.js
const app = getApp();
const link = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems:[],  // 左侧导航
    navRightItems:[], // 右侧产品
    curIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 显示loading
    link.showLoading()

    // 请求分类数据
    link.ajax({ url: `${app.globalData.defaultURL}/api/profiles/productions`},({data:res})=> {
      this.setData({
        navLeftItems: res.navLeftItems,
        navRightItems: res.navRightItems
      })
      
      // 隐藏loading
      link.hideLoading()
    })
  },
  // 改变tab栏
  currentTabs({currentTarget:{dataset:{index:item}}}){
    this.setData({
      curIndex:item
    })
  },
  // 去往列表页
  gotoProductDetail({ currentTarget: { dataset:{product:name}} }){
    wx.navigateTo({
      url: `/pages/productlist/productlist?name=${name}`
    })
  }
})