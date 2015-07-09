define(['backbone'],
  function(Backbone){

    var CollectionsView = Backbone.View.extend({
    	render: function() {
        this.el.innerText = 'collections';
    		//this.$el.html("<h1>This is the home page</hove1><a href='#users'>Go to users</a>");
    	}
    });

    return CollectionsView;
  }
);
