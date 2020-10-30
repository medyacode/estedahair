export default function bootstrapDefault() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.bootstrapDefault = {};

        var _this = app.plugins.bootstrapDefault;

        _this.init = function() {

            var dir = $("html").attr("dir");

            $('[data-toggle="popover"]').popover();

            $('[data-toggle="tooltip"]').tooltip();

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
