import dashboard from './dashboard';
import watchEducation from './watchEducation';

export default function pages() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';
    
        app.pages = {};
    
        var _this = app.pages;
    
        _this.init = function() {
    
          // Pages Init
          dashboard();
          _this.dashboard.init();

          watchEducation();
          _this.watchEducation.init();

          $(".questionList").click(function() {
            var dataId = $(this).attr("data-id");
            if($(this).hasClass("active")) {
              $("#" + dataId).prop("checked", true);
            } else {
              $(".questionList").removeClass("active");
              $(this).addClass("active");
              $("#" + dataId).prop("checked", true);
            }

          });

          $(".surveyList").click(function() {
            var dataId = $(this).attr("data-id");
            if($(this).hasClass("active")) {
              $("#" + dataId).prop("checked", true);
            } else {
              $(".surveyList").removeClass("active");
              $(this).addClass("active");
              $("#" + dataId).prop("checked", true);
            }

          });

          $("#nextQuestionBtn").click(function() {
            alert($('input[name=question_list]:checked', '.questionForm').val()); 
          });

          $("#nextSurveyBtn").click(function() {
            alert($('input[name=survey_list]:checked', '.surveyForm').val()); 
          });

        };
    
    })(Site);

    global.Site = $.extend(global.Site, Site);

}

