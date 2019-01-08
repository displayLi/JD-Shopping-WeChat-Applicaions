const link = require('../../utils/common.js'),
      app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    partData:{},
    baitiao:[],
    componentDatas:{
      btName:'支付',
      btDesc:'【白条支付】首单享立减优惠',
    },
    componentDatas2: {
      selectedName: '已选',
      selectedNums: 1
    },
    isShowPopup:false,
    isShowSelected:false,
    badgeCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({id}) {

    link.showLoading()
  
    link.ajax({ url: `${app.globalData.defaultURL}/api/profiles/productionDetail`},res => {
      let result = null;
      res.data.forEach(item => {
        if (item.partData.id == id){
          result = item
        }
      })
      this.setData({
        partData: result.partData,
        baitiao: result.baitiao
      })

      link.hideLoading()
    })
  },

  popupLayer(){
    this.setData({
      isShowPopup:true
    })
  },
  selectChangeFlag({detail}){
    let isBFQ = detail.desc == '不分期' ? '【白条支付】首单享立减优惠' : detail.desc;
    this.setData({
      componentDatas: {
        btName: '支付',
        btDesc: isBFQ
      }
    })
  },
  showSelected(){
    this.setData({
      isShowSelected: true
    })
  },
  getCartNums({detail}){
    this.data.componentDatas2.selectedNums = detail;
    this.setData({
      componentDatas2: this.data.componentDatas2
    })
    this.addCarts()
  },
  addCarts() {
    wx.getStorage({
      key: 'cartInfo',
      success: (res) => {
        const cartArr = res.data;
        let isFlag = false;
        cartArr.forEach(item => {
          if (item.id == this.data.partData.id) {
            item.total += this.data.partData.count
            wx.setStorage({
              key: 'cartInfo',
              data: cartArr,
            })
            isFlag = true
          }
        })

        if(!isFlag) {
          this.data.partData.total = this.data.partData.count
          cartArr.push(this.data.partData)
          wx.setStorage({
            key: 'cartInfo',
            data: cartArr,
          })
        }
        this.getProductTotal(cartArr)
      },
      fail:err => {
        this.data.partData.total = this.data.partData.count
        let newArr = [];
        newArr.push(this.data.partData)
        wx.setStorage({
          key: 'cartInfo',
          data: newArr,
        })
        this.getProductTotal(newArr)
      }
    })
    wx.showToast({
      title: '加入购物车成功'
    })
  },
  getProductTotal(arrLength){
    this.setData({
      badgeCount: arrLength.length
    })
  },
  gotoCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'cartInfo',
      success:(res) => {
        this.getProductTotal(res.data)
      },
    })
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})