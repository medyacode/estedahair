export default function googlemap() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.googlemap = {};

        var _this = app.plugins.googlemap;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var lang = $("html").attr("lang");

            var element = $("[data-plugin=googlemap]");

            if(element.length > 0)
            {

                var latitude = $(element).attr("data-latitude");
                var longitude = $(element).attr("data-longitude");
                var zoom = $(element).attr("data-zoom") != undefined && $(element).attr("data-zoom").length > 0 ? parseInt($(element).attr("data-zoom")) : 10;

                $(element).googleMap({
                    zoom: zoom,
                    coords: [latitude, longitude],
                    type: "ROADMAP"
                });

                $(element).addMarker({
                    coords: [latitude, longitude],
                });
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
