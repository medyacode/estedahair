export default function dropify() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.dropify = {};

        var _this = app.plugins.dropify;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var lang = $("html").attr("lang");

            var element = $("[data-plugin=dropify]");

            if(element.length > 0)
            {

                if(lang == "ar")
                {
                    $(element).dropify({
                        messages: {
                            'default': 'اسحب وأفلت ملفًا هنا أو انقر',
                            'replace': 'اسحب وأفلت أو انقر للاستبدال',
                            'remove':  'إزالة',
                            'error':   'عفوًا ، حدث خطأ ما.'
                        },
                        error: {
                            'fileSize': 'حجم الملف كبير جدًا ({{value}} بحد أقصى).',
                            'minWidth': 'عرض الصورة صغير جدًا ({{value}}} بكسل دقيقة).',
                            'maxWidth': 'عرض الصورة كبير جدًا (الحد الأقصى {{value}}} بكسل).',
                            'minHeight': 'ارتفاع الصورة صغير جدًا ({{value}}} بكسل دقيقة).',
                            'maxHeight': 'ارتفاع الصورة كبير جدًا ({{value}} بكسل كحد أقصى).',
                            'imageFormat': 'تنسيق الصورة غير مسموح به ({{value}} فقط).'
                        }
                    });
                }
                else
                {
                    $(element).dropify({
                        messages: {
                            'default': 'Drag and drop a file here or click',
                            'replace': 'Drag and drop or click to replace',
                            'remove':  'Remove',
                            'error':   'Ooops, something wrong happended.'
                        },
                        error: {
                            'fileSize': 'The file size is too big ({{ value }} max).',
                            'minWidth': 'The image width is too small ({{ value }}}px min).',
                            'maxWidth': 'The image width is too big ({{ value }}}px max).',
                            'minHeight': 'The image height is too small ({{ value }}}px min).',
                            'maxHeight': 'The image height is too big ({{ value }}px max).',
                            'imageFormat': 'The image format is not allowed ({{ value }} only).'
                        }
                    });
                }

                
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
