// import select2 from './select2';
import intlTelInput from './intl-tel-input';
// import bootstrapDatepicker from './bootstrap-datepicker';
// import owlCarousel from './owl-carousel';
// import bootstrapDefault from './bootstrap-default';
// import slidePanel from './slidePanel';
// import lazy from './lazy';
// import googlemap from './googlemap';
// import bootstrapStarRating from './bootstrap-star-rating';
// import dropify from './dropify';
// import datatable from './datatable';

export default function plugins() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';
    
        app.plugins = {};
    
        var _this = app.plugins;
    
        _this.init = function() {
    
            // select2();
            // _this.select2.init();

            intlTelInput();
            _this.intlTelInput.init();

            // bootstrapDatepicker();
            // _this.bootstrapDatepicker.init();

            // owlCarousel();
            // _this.owlCarousel.init();

            // bootstrapDefault();
            // _this.bootstrapDefault.init();

            // slidePanel();
            // _this.slidePanel.init();

            // lazy();
            // _this.lazy.init();

            // googlemap();
            // _this.googlemap.init();

            // bootstrapStarRating();
            // _this.bootstrapStarRating.init();

            // dropify();
            // _this.dropify.init();

            // datatable();
            // _this.datatable.init();
        };
    
    })(Site);

    global.Site = $.extend(global.Site, Site);

}