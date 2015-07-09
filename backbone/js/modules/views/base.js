define(['backbone'],
  function(Backbone){
    
    var ViewsView = Backbone.View.extend({
    	render: function() {
        this.el.innerText = 'views';
    		//this.$el.html("<h1>This is the home page</hove1><a href='#users'>Go to users</a>");
    	}
    });

    return ViewsView;
  }
);
