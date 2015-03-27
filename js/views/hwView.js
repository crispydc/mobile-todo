//Dependencies
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
Backbone.$ = $;

var hwView = Backbone.View.extend({
    // el - stands for element. Every view has a element associate in with HTML
    //      content will be rendered.
    el: '#hw-container',
    
    template: _.template('<h3>Hello <%=name%>!</h3>'),
    
    initialize: function () {
        this.render();
    },
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions
    //       to push content. Like the Hello World in this case.
    render: function () {
        this.$el.html(this.template({name: 'Me'}));
    }
});

module.exports = hwView;