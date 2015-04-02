//Dependencies
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

//Model definition
var Geo = Backbone.Model.extend({
    defaults: {
        lat: '',
        lng: '',
        alt: '',
        acc: '',
        altAcc: '',
        head: '',
        speed: '',
        time: ''
    }
});

module.exports = Geo;