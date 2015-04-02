//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var Geo = require('../models/geo');

var GeoView = Backbone.View.extend({
    el: '#geoStats',
    model: Geo,
    initialize: function () {

        //setup template
        this.template = _.template($('#geo-template').html());

        //setup event handler for pagechange event to capture location
        $(document).one('pagechange', this, function (e) {
            var view = e.data;
            
            //gather positioning data
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    view.locSuccess(position);
            }, function (error) {
                    view.locError(error);
            }, {enableHighAccuracy: true});
        });
    },

    locSuccess: function (position) {

        //fill model values
        this.model.set({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            alt: position.coords.altitude,
            acc: position.coords.accuracy,
            altAcc: position.coords.alititudeAccuracy,
            head: position.coords.heading,
            speed: position.coords.speed,
            time: position.timestamp
        });

        //fill in the template
        this.$el.html(this.template(this.model.toJSON()));

        //show the listview and hide the loading message
        $('#loadMsg').hide();
        this.$el.listview('refresh').removeClass('ui-screen-hidden');
    },

    locError: function (error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
});

module.exports = GeoView;