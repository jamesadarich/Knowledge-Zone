define(['backbone'],
  function(Backbone){

    var ModelsView = Backbone.View.extend({
    	render: function() {
        this.el.innerText = 'models';
    		//this.$el.html("<h1>This is the home page</hove1><a href='#users'>Go to users</a>");
    	}
    });

    return ModelsView;
  }
);
