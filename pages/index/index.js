//index.js
//获取应用实例
var base = getApp();
var poultry = require('../../utils/poultryData.js')
Page({
  data: {
    path: base.path.res,
    motto: '西客，您好！',
    userInfo: {},
    array: ['岳阳'],
    index: 0,
    poultryData: []
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    //app.getUserInfo(function (userInfo) {
    //更新数据
    //that.setData({
    //userInfo: userInfo
    //})
    //})
    this.setData({ 'poultryData': poultry.data })
  },
  goClass: function (e) {
    var brand = e.currentTarget.dataset.brand;
    if(brand&&brand==1){
      base.cake.tab=1;
    }
    wx.switchTab({ url: '../cake/cake' });
  },
  goDetail: function (e) {
    var nm = e.currentTarget.dataset.pname;
    var b = e.currentTarget.dataset.brand;
    wx.navigateTo({
      url: '../cakeDetail/cakeDetail?pname=' + nm+"&brand="+(b||0)
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })

    //wx.navigateTo({
    //url: '../socket/socket'
    //})
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
    return {
      title: '西客生鲜',
      desc: '',
      path: '/pages/index/index?id=123'
    }
  }
})
