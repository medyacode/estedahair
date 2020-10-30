export default function owlCarousel() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.owlCarousel = {};

        var _this = app.plugins.owlCarousel;

        _this.init = function() {

            var lang = $("html").attr("lang");

            var element = $("[data-plugin=owlCarousel]");

            if(element.length > 0)
            {
                $(element).owlCarousel();
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
