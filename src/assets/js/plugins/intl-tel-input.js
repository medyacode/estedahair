export default function intlTelInput() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.intlTelInput = {};

        var _this = app.plugins.intlTelInput;

        _this.init = function() {

            var dir = $("html").attr("dir");

            var element = $("[data-plugin=intlTelInput]");

            if(element.length > 0)
            {
                $.each(element, function(key,el) {
                    var _this = $(el).attr("id");
                    if(_this != undefined){
                        var input = document.querySelector("#" + _this);
                        window.intlTelInput(input, {
                            hiddenInput: "full_"+ _this,
                            separateDialCode: true,
                            utilsScript: "/assets/js/plugins/intl-tel-input/utils.js",
                            initialCountry: "auto",
                            geoIpLookup: function(success, failure) {
                                $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                                var countryCode = (resp && resp.country) ? resp.country : "";
                                success(countryCode);
                                });
                            },
                            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                                return "e.g. " + selectedCountryPlaceholder;
                            },
                        });
                    }
                });
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
