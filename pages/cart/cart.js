// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    totalMoney:'0.00',
    totalCount:0,
    selectAll:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getList(){
    wx.getStorage({
      key: 'cartInfo',
      success: (res) => {
        res.data.forEach(item => {
          item.select = false
        })

        this.setData({
          cartList: res.data
        })
        // 显示tabBar的图标
        this.data.cartList.length > 0 ?
          wx.setTabBarBadge({ index: 2, text: String(this.data.cartList.length) }) :
          wx.removeTabBarBadge({ index: 2 })
      },
    })
  },

  getCartCount({currentTarget:{dataset:{index}},detail}) {
    this.data.cartList[index].total = detail;

    this.setData({
      cartList: this.data.cartList
    })
  },
  gotoProductDetail({ currentTarget: { dataset: { index } }}){
    wx.navigateTo({
      url: `/pages/productdetail/productdetail?id=${this.data.cartList[index].id}`,
    })
  },
  selectProduct({currentTarget:{dataset:{index}}}) {

    let totalMoney = Number(this.data.totalMoney),
        totalCount = this.data.totalCount,
        cartList = this.data.cartList,
        selectAll = this.data.selectAll;

    cartList[index].select = !cartList[index].select

    if (cartList[index].select) {
      totalMoney += Number(cartList[index].price * cartList[index].total);
      totalCount++;
    }else {
      totalMoney -= Number(cartList[index].price * cartList[index].total);
      totalCount--;
      selectAll = false
    }
    console.log(totalMoney);
    this.setData({
      cartList,
      totalCount,
      selectAll,
      totalMoney: String(totalMoney.toFixed(2))
    })

  },
  selectAll(){

    const cartList = this.data.cartList
    let totalMoney = 0 // 合计初始化为0
    let totalCount = 0 // 结算个数初始化为0
    let selectAll = this.data.selectAll

    selectAll = !selectAll // 全选按钮置反

    cartList.forEach(cart => {
      // 设置选中或不选中状态 每个商品的选中状态和全选按钮一致
      cart.select = selectAll
      // 计算总金额和商品个数
      if (cart.select) { // 如果选中计算
        totalMoney += Number(cart.price) * cart.total
        totalCount++
      } else {// 全不选中置为0
        totalMoney = 0
        totalCount = 0
      }

    })
    // 更新data
    this.setData({
      cartList,
      totalMoney: String(totalMoney.toFixed(2)),
      totalCount,
      selectAll
    })
  },
  addNums({currentTarget:{dataset:{index}}}){

    let totalMoney = Number(this.data.totalMoney),
        cartList = this.data.cartList;

    if (cartList[index].select) {
      totalMoney += Number(cartList[index].price);
    }

    this.setData({
      cartList,
      totalMoney: String(totalMoney.toFixed(2))
    })

  },
  subNums({ currentTarget: { dataset: { index } } }){

    let totalMoney = Number(this.data.totalMoney),
        cartList = this.data.cartList;

    if (cartList[index].select) {
      totalMoney -= Number(cartList[index].price);
    }

    this.setData({
      cartList,
      totalMoney: String(totalMoney.toFixed(2))
    })

  },

  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.cartList.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      cartList: this.data.cartList
    })
  },
  /**
   * 滑动事件处理
  */
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    this.data.cartList.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })

    //更新数据
    that.setData({
      cartList: that.data.cartList
    })
  },
  /**
   * 计算滑动角度
  */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  /**
   * 删除事件
  */
  del: function (e) {
    var index = e.currentTarget.dataset.index
    var self = this

    // 删除storage
    wx.getStorage({
      key: 'cartInfo',
      success: function (res) {
        const partData = res.data
        partData.forEach((cart, i) => {
          if (cart.title == self.data.cartList[index].title) {
            partData.splice(i, 1)
          }
        })
        wx.setStorage({
          key: 'cartInfo',
          data: partData
        })
        self.update(index)
      }
    })
  },
  update: function (index) {
    var cartList = this.data.cartList
    let totalMoney = Number(this.data.totalMoney)
    let totalCount = this.data.totalCount
    // 计算价格和数量
    if (cartList[index].select) {
      totalMoney -= Number(cartList[index].price) * cartList[index].total
      totalCount--
    }
    // 删除
    cartList.splice(index, 1)
    // 更新数据
    this.setData({
      cartList: this.data.cartList,
      totalCount: totalCount,
      totalMoney: String(totalMoney.toFixed(2))
    })

    // 设置Tabbar图标
    cartList.length > 0 ?
      wx.setTabBarBadge({
        index: 2,
        text: String(cartList.length)
      }) : wx.removeTabBarBadge({
        index: 2,
      })
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorage({
      key: 'cartInfo',
      data: this.data.cartList,
    })

    this.setData({
      totalMoney: '0.00',
      totalCount: 0,
      selectAll: false
    })
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