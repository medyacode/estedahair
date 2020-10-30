export default function slidePanel() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.slidePanel = {};

        var _this = app.plugins.slidePanel;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var direction = dir == "ltr" ? "left" : "right";
            var element = $("[data-plugin=slidePanel]");

            if(element.length > 0)
            {
                $(element).slidePanel({
                    //direction: direction,
                    mouseDrag: false,
                    touchDrag: false,
                    pointerDrag: false,
                    beforeShow: function() {
                        $('body').addClass("fixed-scroll");
                    },
                    beforeHide: function () {
                        $('body').removeClass("fixed-scroll");
                    }
                });
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
