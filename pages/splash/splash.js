Page({

    sClick: function() {
      wx.navigateTo({
        url: '../board/board',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
})