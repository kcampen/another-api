var MainRouter = Backbone.Router.extend({

	routes: {

		'artist/:name' : 'showMusic',
	},

	initialize: function(){
		this.items = new MusicCollection();
		this.items.on('add', function(music){
			new MusicView({model: music});
		});
	},

	showMusic: function(name){
		this.items.url += ('&name=' + name);

		this.items.fetch();
		console.log('what', this.items)

	}
})