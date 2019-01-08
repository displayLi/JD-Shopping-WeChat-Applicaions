// components/IOU/iouCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShowPopup:{
      type:Boolean,
      default:false
    },
    IOUList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hiedPopupView({ target: { dataset: { target: current}}}){
      if (current == 'current') {
        this.setData({
          isShowPopup:false
        })
      }
    },
    selectedCheck({ currentTarget: { dataset: { currentindex:index}}}){
      this.data.IOUList.forEach(item => item.select = false )
      this.data.IOUList[index].select = !this.data.IOUList[index].select
      this.setData({
        IOUList: this.data.IOUList,
        selectIndex:index
      })
    },
    submitBT(){
      let index = this.data.selectIndex
      this.triggerEvent('selectedBT', this.data.IOUList[index])
      this.setData({
        isShowPopup: false
      })
    }
  }
})
