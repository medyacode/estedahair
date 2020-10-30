export default function datatable() {

    var Site = global.Site || {};

    (function(app) {
        'use strict';

        app.plugins.datatable = {};

        var _this = app.plugins.datatable;

        _this.init = function() {

            var dir = $("html").attr("dir");
            var lang = $("html").attr("lang");

            var element = $("[data-plugin=dataTable]");

            if(element.length > 0)
            {

                if (lang === 'tr')
                {
                    $(element).DataTable({
                        "language": {
                            "sDecimal":        ",",
                            "sEmptyTable":     "Tabloda herhangi bir veri mevcut değil",
                            "sInfo":           "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
                            "sInfoEmpty":      "Kayıt yok",
                            "sInfoFiltered":   "(_MAX_ kayıt içerisinden bulunan)",
                            "sInfoPostFix":    "",
                            "sInfoThousands":  ".",
                            "sLengthMenu":     "Sayfada _MENU_ kayıt göster",
                            "sLoadingRecords": "Yükleniyor...",
                            "sProcessing":     "İşleniyor...",
                            "sSearch":         "Ara:",
                            "sZeroRecords":    "Eşleşen kayıt bulunamadı",
                            "oPaginate": {
                                "sFirst":    "İlk",
                                "sLast":     "Son",
                                "sNext":     "Sonraki",
                                "sPrevious": "Önceki"
                            },
                            "oAria": {
                                "sSortAscending":  ": artan sütun sıralamasını aktifleştir",
                                "sSortDescending": ": azalan sütun sıralamasını aktifleştir"
                            },
                            "select": {
                                "rows": {
                                    "_": "%d kayıt seçildi",
                                    "0": "",
                                    "1": "1 kayıt seçildi"
                                }
                            }
                        }
                    });
                }
                else
                {
                    $(element).DataTable();
                }
            }

        };

    })(Site);

    global.Site = $.extend(global.Site, Site);
}
