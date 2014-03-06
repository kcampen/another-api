var MainView = Backbone.View.extend({

	musicTemplate: _.template($('#music-template').text()),


	initialize: function(){
		$('content').append(this.el);
		this.render();

	},
	render: function(){
		var renderTemplate = this.musicTemplate(this.model.attributes)

		this.$el.html(renderTemplate);
	}
})