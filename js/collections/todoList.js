//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
Backbone.LocalStorage = require('backbone.localstorage');
var Todo = require('../models/todo');

//Collection definition
var TodoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Store("backbone-todo"),
    completed: function () {
        return this.filter(function (todo) {
            return todo.get('completed');
        });
    },
    remaining: function () {
        return this.without.apply(this, this.completed());
    }
});

module.exports = TodoList;