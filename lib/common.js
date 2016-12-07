const API_URL = 'https://api.douban.com/v2/movie';

var getData = function(self,params) {
    
    wx.request({
      url: API_URL + params,
      //data: {},
      //method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'Content-Type': 'json' }, // 设置请求的 header
      success: function(res){
        // success
        //console.log(res.data);
        if(res.data.subjects) {
          self.setData({
          title: res.data.title,
          subjects: res.data.subjects
        })
        }else {
          //console.log(res.data);
          self.setData({
          title: res.data.title,
          subjects: res.data
        })
        }
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    
}

module.exports = getData;