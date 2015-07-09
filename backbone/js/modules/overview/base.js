define(['backbone'],
  function(Backbone){
    
    var OverviewView = Backbone.View.extend({
    	render: function() {
        this.el.innerText = 'overview';
    		//this.$el.html("<h1>This is the home page</hove1><a href='#users'>Go to users</a>");
    	}
    });

    return OverviewView;
  }
);
