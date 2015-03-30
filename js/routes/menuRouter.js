//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var TodoAppView = require('../views/todoAppView');
var TodoRouter = require('./todoRouter');
var TodoCollection = require('../collections/todoList');

var MenuRouter = Backbone.Router.extend({
    routes: {
        'todo': 'changeTodo',
        '': 'home'
    },
    initialize: function(options) {
        this.todoRouter = new TodoRouter();
    },
    home: function() {
        //change back to menu page
        $.mobile.changePage('#menu', {changeHash: false, reverse: false});
    },
    changeTodo: function () {
        
        //load external page
        var todoRouter = this.todoRouter;
        
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
    }
});

module.exports = MenuRouter;