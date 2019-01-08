// components/count/count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: { // 商品数量
      type: Number,
      value: 1
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
    changeNum({detail:{value}}){
      value > 0 ? value : wx.showToast({title: '你输入的数量不能为空，且不能小于0',icon:"none"});
      this.setData({
        count: value
      })
      this.triggerEvent('getSelectNum', value) 
    },
    subtract(){
      let nums = this.data.count > 0 ? this.data.count : wx.showToast({ title: '你输入的数量不能为空，且不能小于0', icon: "none" });
      this.setData({
        count: --nums
      })
      this.triggerEvent('getSelectNum', nums) 
      this.triggerEvent('subEvent')
    },
    add(){
      this.setData({
        count: ++this.data.count
      })
      this.triggerEvent('getSelectNum', this.data.count)
      this.triggerEvent('addEvent') 
    }
  }
})
