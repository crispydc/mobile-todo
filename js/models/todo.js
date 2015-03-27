//Dependencies
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

//Model definition
var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

module.exports = Todo;