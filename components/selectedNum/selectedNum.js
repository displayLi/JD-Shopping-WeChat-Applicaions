// components/selectedNum/selectedNum.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShowSelected:{
      type:Boolean,
      default:false
    },
    partData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    detail:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showSelectedPopup({target:{dataset:{current}}}){
      if (current == 'current') {
        this.setData({
          isShowSelected:false
        })
      }
    },
    getCartVal({detail}){
      this.data.partData.count = detail;
      this.setData({
        partData: this.data.partData,
        detail: detail
      })

      this.triggerEvent('getCartNum',detail)
    },
    addCart(){
      this.setData({
        isShowSelected:false
      })
    }
  }
})
