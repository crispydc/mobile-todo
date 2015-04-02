//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var TodoAppView = require('../views/todoAppView');
var TodoRouter = require('./todoRouter');
var TodoCollection = require('../collections/todoList');
var DragView = require('../views/dragView');
var Geo = require('../models/geo');
var GeoView = require('../views/geoView');

var MenuRouter = Backbone.Router.extend({
    routes: {
        'todo': 'changeTodo',
        '': 'home',
        'drag': 'changeToDrag',
        'geo': 'changeToGeo'
    },
    initialize: function(options) {
        //nothing to do here
    },
    home: function() {
        //change back to menu page
        $.mobile.changePage('#menu', {changeHash: false, reverse: false});
    },
    changeTodo: function () {
        
        //setup todo router
        if(!this.todoRouter) {
            this.todoRouter = new TodoRouter();
        }
        var todoRouter = this.todoRouter;
        
        //load external page
        $( ":mobile-pagecontainer" ).pagecontainer('load', 'todos.html').done(function() {
            //setup the view objects
            var todoList = new TodoCollection();
            var todoAppView = new TodoAppView({collection: todoList});
            
            //update the todoRouter with the objects
            todoRouter.appView = todoAppView;
            todoRouter.todoList = todoList;
            
            //finally change to the new page
            $.mobile.changePage('#todoapp', {changeHash: false, reverse: false});
        });
    },
    
    changeToDrag: function() {
        
        //load external page
        $.mobile.pageContainer.pagecontainer('load', 'drag.html').done(function() {
            
            //init view
            this.dragView = new DragView();
            
            //change to new page
            $.mobile.changePage('#dragdemo', {changeHash: false, reverse: false});
        });
    },
    
    changeToGeo: function() {
        
        //load external page
        $.mobile.pageContainer.pagecontainer('load', 'geo.html').done(function() {
            
            //init view
            this.geoView = new GeoView({model: new Geo()});
            
            //change to new page
            $.mobile.changePage('#geo', {changeHash: false, reverse: false});
        });
    }
});

module.exports = MenuRouter;