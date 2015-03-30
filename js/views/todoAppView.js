//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var TodoList = require('../collections/TodoList');
var TodoView = require('./todoView');

// renders the full list of todo items calling TodoView for each one.
var TodoAppView = Backbone.View.extend({
    el: '#todoapp',
    collection: TodoList,
    initialize: function () {
        this.input = this.$('#new-todo');
        
        // when new elements are added to the collection render then with addOne
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.addAll, this);
        this.collection.fetch(); // Loads list from local storage
    },

    events: {
        'keypress #new-todo': 'createTodoOnEnter'
    },

    createTodoOnEnter: function (e) {
        if (e.which !== 13 || !this.input.val().trim()) { // ENTER_KEY = 13
            return;
        }
        this.collection.create(this.newAttributes());
        this.input.val(''); // clean input box
        this.$('.ui-listview').listview('refresh'); //refresh list
    },

    addOne: function (todo) {
        var view = new TodoView({
            model: todo
        });
        $('#todo-list').append(view.render().el);
    },

    addAll: function () {
        this.$('#todo-list').html(''); // clean the todo list
        
        // filter todo item list
        switch (this.filter) {
            case 'pending':
                _.each(this.collection.remaining(), this.addOne);
                break;
            case 'completed':
                _.each(this.collection.completed(), this.addOne);
                break;
            default:
                this.collection.each(this.addOne, this);
                break;
        }
        
        this.$('.ui-listview').listview('refresh'); //refresh list
    },

    newAttributes: function () {
        return {
            title: this.input.val().trim(),
            completed: false
        };
    }
});

module.exports = TodoAppView;