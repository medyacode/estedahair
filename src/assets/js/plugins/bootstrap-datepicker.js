export default function bootstrapDatepicker() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.bootstrapDatepicker = {};

        var _this = app.plugins.bootstrapDatepicker;

        _this.init = function() {

            var lang = $("html").attr("lang");

            var element = $("[data-plugin=bootstrapDatepicker]");

            if(element.length > 0)
            {
                $(element).datepicker({
                    language: lang,
                    format: 'dd/mm/yyyy'
                });
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
