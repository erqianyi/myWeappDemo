const getData = require('../../lib/common.js');

Page({

    data: {
        subtitle: '请在这里输入搜索内容'
    },

    search ( params ) {
        console.log(params);
        var self = this;
        const newParams = '/search?q=' + params.detail.value;
        // console.log(newParams);
        getData(self, newParams);

        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 3000,
            // success: function() {
            //     wx.hideToast();
            // }
        })
    }
})