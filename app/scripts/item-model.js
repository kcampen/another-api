var Music = Backbone.Model.extend({});

var MusicCollection = Backbone.Collection.extend({

	model: Music,

	url: 'http://developer.echonest.com/api/v4/artist/search?api_key=UKFEV2KMVXLZVRU9T&format=jsonp&results=10&bucket=genre&bucket=images&callback=?',

	parse: function(data){
		return data.response.artists;
	}

});