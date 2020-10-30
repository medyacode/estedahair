// import select2 from 'select2';
//require('select2')
//import 'select2/dist/js/select2.full.js'
// const select2 = require('select2');
// select2.$ = $;
// require('select2')($);
// $.fn.select2.defaults.set("theme", "bootstrap4");

global.select2 = require('select2')($);
require("select2/dist/js/i18n/ar")
global.$.fn.select2.defaults.set("theme","bootstrap4");