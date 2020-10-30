export default function lazy() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.lazy = {};

        var _this = app.plugins.lazy;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var lang = $("html").attr("lang");

            var element = $("[data-plugin=lazy]");

            if(element.length > 0)
            {
                $(element).lazy();
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
