/************
Main application script
*************/

//Initialize Frameworks
var $ = require('jquery');
$.mobile = require('jquery-mobile');

//Load Views
var HwView = require('./views/hwView');

//Initialize views
var hwView = new HwView();