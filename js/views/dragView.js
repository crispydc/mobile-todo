//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Dragend = require('dragend');

var DragView = Backbone.View.extend({
    el: '#drag',
    initialize: function() {
        console.log(this.$el);
        console.log(this.$el.get(0));
        this.dragend = new Dragend(this.$el.get(0), {
            afterInitialize: function () {
                $('#drag').css('visibility', 'visible');
            }
        });
    }
});

module.exports = DragView;