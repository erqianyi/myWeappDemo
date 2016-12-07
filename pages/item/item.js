const getData = require('../../lib/common.js');

Page({

    data: {},

    onLoad ( params ) {
        console.log(params);
        var self = this;
        const newParams = '/subject/' + params.id;
        // console.log(newParams);
        getData(self, newParams);

        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 1000,
            // success: function() {
            //     wx.hideToast();
            // }
        })
    }
})