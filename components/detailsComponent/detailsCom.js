// components/detailsComponent/detailsCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      default:''
    },
    desc:{
      type:String,
      default:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopupLayer(){
      this.triggerEvent('showLayer', [{ gotoData: 'hello wx application' }])
    }
  }
})
