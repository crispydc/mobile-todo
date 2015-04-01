//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Dragend = require('dragend');

var DragView = Backbone.View.extend({
    el: '#drag',
    initialize: function () {
        //add event listener to trigger once page has been displayed to init dragend view
        //Dragend reads height/width of dragend-page objects so they must be visible prior to init
        $(document).one('pagechange', this, function (e) {
            //var container = document.getElementById("drag");
            var dragView = e.data;
            dragView.dragend = new Dragend(dragView.$el.get(0), {
                
                afterInitialize: function () {
                    //show dragable area once ready
                    dragView.$el.css('visibility', 'visible');
                }
            });
        });
    }
});

module.exports = DragView;