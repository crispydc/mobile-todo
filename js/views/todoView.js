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
    render: function () {
        this.$el.html(this.template(this.model.toJSON())).enhanceWithin();
        this.$('.toggle').prop('checked', this.model.get('completed'));
        this.input = this.$('.edit');
        return this; // enable chained calls
    },
    initialize: function () {
        //setup template
        this.template = _.template($('#item-template').html());
        
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this); // remove: Convenience Backbone's function for removing the view from the DOM.
    },
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close',
        'click .toggle': 'toggleCompleted',
        'click .destroy': 'destroy'
    },
    edit: function () {
        this.$('.hider').removeClass('ui-screen-hidden');
        this.input.focus();
    },
    close: function () {
        var value = this.input.val().trim();
        if (value) {
            this.model.save({
                title: value
            });
        }
        this.$('.hider').addClass('ui-screen-hidden');
    },
    updateOnEnter: function (e) {
        if (e.which == 13) {
            this.close();
        }
    },
    toggleCompleted: function () {
        this.model.toggle();
    },
    destroy: function(){
        this.model.destroy();
    }
});

module.exports = TodoView;