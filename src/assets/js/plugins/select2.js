export default function select2() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.select2 = {};

        var _this = app.plugins.select2;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var lang = $("html").attr("lang");

            var element = $("[data-plugin=select2]");

            if(element.length > 0)
            {
                $(element).select2({
                    width: '100%',
                    dropdownAutoWidth : true,
                    dir: dir,
                    language: lang,
                });
                $(element).select2().on('select2:select select2:unselect', function () {
                    $(":focus").blur();
                })
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
