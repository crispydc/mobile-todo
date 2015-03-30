//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var TodoRouter = Backbone.Router.extend({
    routes: {
        'todo/*filter': 'setFilter'
    },
    initialize: function(options) {
        //nothing to do here
    },
    setFilter: function (params) {
        this.appView.filter = params ? params.trim() : '';
        this.todoList.trigger('reset');
    }
});

module.exports = TodoRouter;