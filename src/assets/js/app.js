// Import vendor js
global.$ = global.jQuery = require('jquery')
require('./vendor/vendor')

import plugins from './plugins/plugins';
import pages from './pages/pages';
import component from './component/component';
import helpers from './helpers/helpers';

var Site = Site || {};
(function(app) {

    app.selectors = {
        currentPage             : '',
        body                    : 'body',
        title                   : 'title',
    };

    app.keys = {
        codes:  {
            9:  'tab',
            13: 'return',
            27: 'esc',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        },
        tab:    9,
        return: 13,
        esc:    27,
        left:   37,
        up:     38,
        right:  39,
        down:   40
    };

    app.events = {
        click:      'click.Site',
        change:     'change.Site',
        touchstart: 'touchstart.Site',
        focus:      'focus.Site',
        blur:       'blur.Site',
        keyup:      'keyup.Site',
        keypress:   'keypress.Site',
        mouseover:  'mouseover.Site',
        load:       'load.Site',
        mouseenter: 'mouseenter.Site',
        mouseleave: 'mouseleave.Site'
    };

    app.classes = {};

    app.$objs = {};

    app.vals = {
        rtl: false,
    };

    app.init = function() {

        $(window).on('load', function () {
            // initialization of HSMegaMenu component
            $('.js-mega-menu').HSMegaMenu({
              event: 'hover',
              pageContainer: $('.container'),
              breakpoint: 991,
              hideTimeOut: 0
            });
        });

        // All Helpers Init
        helpers();
        app.helpers.init();

        // All Plugin Init
        plugins();
        app.plugins.init();

        // All Pages Init
        pages();
        app.pages.init();

        // All Component Init
        component();
        app.component.init();

    };

    app.bodyAddClass = function(addClass){
        var bodyClass = $("body").attr("class");
        $("body").addClass(bodyClass + " " + addClass);
    }

})(Site);

global.Site = Site;
