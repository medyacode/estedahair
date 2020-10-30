export default function watchEducation() {

  var Site = global.Site || {};

  (function(app) {
      'use strict';
  
      app.pages.watchEducation = {};
  
      var _this = app.pages.watchEducation;
  
      _this.init = function() {

        var dir = $("html").attr("dir");
        var direction = dir == "rtl" ? true : false;

        _this.watchResize();

        $(window).resize(function() {
            _this.watchResize();
        });


        $(document).on('click', '.course-header .close a', function(){
            _this.watchPreviewExpand();
        });

        $(document).on('click', '.course-content-trigger a', function(){
            _this.watchPreviewCollapse();
        });

        $(document).on('click', '#watchPreviewExpand', function(){
            _this.watchPreviewExpand();
        });

        $(document).on('click', '#watchPreviewCollapse', function(){
            _this.watchPreviewCollapse();
        });

        $(document).on('click', '.course-content #accordion .card .card-header h5 a', function (event) {
            $('.course-content #accordion .card .card-header h5 a').find('i.fas').addClass('fa-chevron-down').removeClass('fa-chevron-up');
            if($(this).hasClass('collapsed'))
            {
                $(this).find('i.fas').addClass('fa-chevron-down');
            }
            else
            {
                $(this).find('i.fas').addClass('fa-chevron-up');
            }
        });
        
      };

      _this.watchPreviewExpand = function () {
        $('.course-wrapper').hide();
        $('.watch-content').addClass('w-100');
        $('.course-content-trigger').removeClass('hide').addClass('show');
        $('#watchPreviewExpand').hide();
        $('#watchPreviewCollapse').show();
      }

      _this.watchPreviewCollapse = function () {
        $('.course-wrapper').show();
        $('.watch-content').removeClass('w-100');
        $('.course-content-trigger').removeClass('show').addClass('hide');
        $('#watchPreviewExpand').show();
        $('#watchPreviewCollapse').hide();
      }

      _this.watchResize = function () {
        if($(window).outerWidth() > 991)
        {
            var windowHeight = $(window).outerHeight();
            var headerHeight = $('header').outerHeight();
            var courseHeaderHeight = $('.course-header').outerHeight();
            $('.course-wrapper').height(windowHeight - headerHeight + courseHeaderHeight);
    
            $(window).scroll(function(e) {
                var scrollTop = $(document).scrollTop();
                if(scrollTop > 93)
                {
                    $('.course-wrapper').css('top', '0');
                    $('.course-wrapper').css('position', 'fixed');
                    $('.course-wrapper').height(windowHeight);
                }
                else if(scrollTop <= 93)
                {
                    $('.course-wrapper').css('top', '94');
                    $('.course-wrapper').css('position', 'relative');
                    $('.course-wrapper').height(windowHeight - headerHeight + courseHeaderHeight);
                }
            });
        }
        else
        {
            _this.watchPreviewExpand();
        }
      }
  
  })(Site);

  global.Site = $.extend(global.Site, Site);

}