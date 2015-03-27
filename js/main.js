/************
Main application script
*************/

//Initialize Frameworks
var $ = require('jquery');
$.mobile = require('jquery-mobile');

//Setup JQM
$(document).on("mobileinit", function () {
    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
});

//Load Views
var HwView = require('./views/hwView');
var AppView = require('./views/appView');

//Load Collections
var TodoCollection = require('./collections/todoList');

//Initialize views
var hwView = new HwView();
var appView = new AppView({collection: new TodoCollection()});