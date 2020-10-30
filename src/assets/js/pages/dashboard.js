export default function dashboard() {

  var Site = global.Site || {};

  (function(app) {
      'use strict';
  
      app.pages.dashboard = {};
  
      var _this = app.pages.dashboard;
  
      _this.init = function() {

        var dir = $("html").attr("dir");
        var direction = dir == "rtl" ? true : false;

        
      }
  
  })(Site);

  global.Site = $.extend(global.Site, Site);

}