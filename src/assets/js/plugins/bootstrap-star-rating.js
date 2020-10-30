export default function bootstrapStarRating() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.bootstrapStarRating = {};

        var _this = app.plugins.bootstrapStarRating;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var direction = dir == "ltr" ? false : true;
            var lang = $("html").attr("lang");

            var element = $("[data-plugin=starRating]");

            if(element.length > 0)
            {
                $(element).rating({
                    theme: 'krajee-fa',
                    filledStar: '<i class="fa fa-star"></i>',
                    emptyStar: '<i class="fa fa-star"></i>',
                    rtl: direction,
                    language: lang,
                    size:"xs",
                });
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
