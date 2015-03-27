//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var Todo = require('../collections/todoList');

// renders individual todo items list (li)
var TodoView = Backbone.View.extend({
    tagName: 'li',
    attributes: {
        'data-role': 'field-contain'
    },
    template: _.template($('#item-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.edit');
        return this; // enable chained calls
    },
    initialize: function () {
        this.model.on('change', this.render, this);
    },
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
    edit: function () {
        console.log('here');
        this.$el.find('.hider').removeClass('ui-screen-hidden');
        this.input.focus();
    },
    close: function () {
        var value = this.input.val().trim();
        if (value) {
            this.model.save({
                title: value
            });
        }
        this.$el.find('.hider').addClass('ui-screen-hidden');
    },
    updateOnEnter: function (e) {
        if (e.which == 13) {
            this.close();
        }
    }
});

module.exports = TodoView;