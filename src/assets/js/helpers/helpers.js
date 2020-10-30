import ajax from './ajax';

export default function helpers() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';
    
        app.helpers = {};
    
        var _this = app.helpers;
    
        _this.init = function() {
    
          ajax();
    
        };
    
    })(Site);

    global.Site = $.extend(global.Site, Site);

}

