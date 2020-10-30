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
    
        $(document).on('ready', function () {
            // initialization of header
            $.HSCore.components.HSHeader.init($('#header'));
    
            // initialization of unfold component
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
              afterOpen: function () {
                if (!$('body').hasClass('IE11')) {
                  $(this).find('input[type="search"]').focus();
                }
              }
            });
    
            // initialization of form validation
            $.HSCore.components.HSValidation.init('.js-validate', {
              rules: {
                confirmPassword: {
                  equalTo: '#password'
                }
              }
            });
    
            // initialization of forms
            $.HSCore.helpers.HSFocusState.init();
    
            // initialization of malihu scrollbar
            $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));
    
            // initialization of autonomous popups
            $.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-signup-modal', {
              autonomous: true
            });
    
            // initialization of show animations
            $.HSCore.components.HSShowAnimation.init('.js-animation-link');
    
            // initialization of slick carousel
            $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    
            // initialization of cubeportfolio
            $.HSCore.components.HSCubeportfolio.init('.cbp');
    
            // initialization of video player
            $.HSCore.components.HSVideoPlayer.init('.js-inline-video-player');
    
            // initialization of go to
            $.HSCore.components.HSGoTo.init('.js-go-to');
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
