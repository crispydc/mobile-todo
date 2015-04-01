/************
Main application script
*************/

//Initialize Frameworks
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

//Setup JQM
$(document).on("mobileinit", function () {
    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
});
$.mobile = require('jquery-mobile');

//Setup Cordova
$(document).on('deviceready', function() {
    $('#cdvmsg').show();
});

//Initialize routers
var MenuRouter = require('./routes/menuRouter');
var menuRouter = new MenuRouter();

//start Backbone history
Backbone.history.start();