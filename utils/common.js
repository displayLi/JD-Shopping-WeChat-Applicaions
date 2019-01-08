
const ajax = ({ url, method, data, header }, success, fail) => {
    wx.request({
        url,
        method: method || 'GET',
        data: data || {},
      header: header || { "Contant-Type": "application/json" },
        success,
        fail
    })
}

const showLoading = () => {
  wx.showLoading({
    title: '加载中...',
  })
}

const hideLoading = () => {
  setTimeout(_=>{
    wx.hideLoading()
  },800)
}


module.exports = {
  ajax,
  showLoading,
  hideLoading
}