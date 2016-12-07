const getData = require('../../lib/common.js');

Page({

    data: {},

   onLoad () { 
     var self = this;
     getData(self,'/in_theaters?count=3');
   } 
})