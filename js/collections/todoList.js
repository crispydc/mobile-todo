//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
Backbone.LocalStorage = require('backbone.localstorage');
var Todo = require('../models/todo');

//Collection definition
var TodoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Backbone.LocalStorage("backbone-todo")
});

module.exports = TodoList;