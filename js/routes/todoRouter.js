//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

//define app modules
var AppView = require('../views/appView');
var TodoCollection = require('../collections/todoList');

var TodoRouter = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },
    initialize: function(options) {
        this.todoList = new TodoCollection();
        this.appView = new AppView({collection: this.todoList});
    },
    setFilter: function (params) {
        console.log('app.router.params = ' + params); // just for didactical purposes.
        this.appView.filter = params ? params.trim() : '';
        this.todoList.trigger('reset');
    }
});

module.exports = TodoRouter;