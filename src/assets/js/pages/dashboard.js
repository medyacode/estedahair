export default function dashboard() {

  var Site = global.Site || {};

  (function(app) {
      'use strict';
  
      app.pages.dashboard = {};
  
      var _this = app.pages.dashboard;
  
      _this.init = function() {

        var dir = $("html").attr("dir");
        var direction = dir == "rtl" ? true : false;

        $("#UserHistoryCarousel").owlCarousel({
            nav:true,
            margin:30,
            lazyLoad:true,
            dots: false,
            mouseDrag: true,
            navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        });

        $("#UpcomingCoursesCarousel").owlCarousel({
            nav:true,
            margin:0,
            lazyLoad:true,
            dots: false,
            mouseDrag: true,
            navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });

        $(document).on('click', '#UserHistoryWrapperToggle', function(){
            $('.user-history-wrapper').toggle();
        });
        
      }
  
  })(Site);

  global.Site = $.extend(global.Site, Site);

}