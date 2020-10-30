export default function ajax() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';
    
        app.helpers.ajax = {};
    
        var _this = {

            call: function(url, method, param, successCallback, errorCallback) {

                if(typeof url !== 'undefined') {
                    return $.ajax({
                        url         : url,
                        method      : method,
                        data        : param,
                        dataType    : 'json',
                        contentType : 'application/json; charset=utf-8'
                    }).done(function(data){
                        return successCallback(data);
                    }).fail(errorCallback);
                };
    
            },

        };
    
        app.helpers.ajax = _this;
    
    })(Site);

    global.Site = $.extend(global.Site, Site);

}

