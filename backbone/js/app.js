define(['backbone'],
  function(Backbone){
    console.log(Backbone);
    var HomeView = Backbone.View.extend({
    	//tagName: "div",
    	//id: "home-view",

    	initialize: function(options) {
    		//$("body").html(this.el);
    		this.$el = options.$el;
    	},
    	render: function() {
        this.el.innerText = 'test';
    		//this.$el.html("<h1>This is the home page</h1><a href='#users'>Go to users</a>");
    	}
    });

    var view = new HomeView({
      el: document.querySelector('.page-content')
    });

    view.render();
  }
);/*
var HomeView = Backbone.View.extend({
	//tagName: "div",
	//id: "home-view",

	initialize: function(options) {
		//$("body").html(this.el);
		this.$el = options.$el;
	},
	render: function() {
		this.$el.html("<h1>This is the home page</h1><a href='#users'>Go to users</a>");
	}
});

var AppView = Backbone.View.extend({
	//tagName: "div",
	//id: "home-view",
	initialize: function() {
		//$("body").html(this.el);
		this.render();
	},
	render: function() {
    if (document.body){
  		$(document.body).html('<div class="page"><div class="page-header"><img src="http://backbonejs.org/docs/images/backbone.png" /></div><div class="page-content">1234</div></div>');
      if (this.subView) {
        this.subView.render();
      }
    }
	}
});

var appView = new AppView();

var UsersView = Backbone.View.extend({
	tagName: "ul",
	id: "users-list",
	initialize: function() {
		$("body").html(this.el);
		this.subViews = _.map(["Jules", "Vincent", "Marsellus"], function(user) {
			return new UserView({ model: new Backbone.Model({ id: user, name: user }) });
		});
		this.render();
	},
	render: function() {
		_.each(this.subViews, function(view) {
			this.$el.append(view.el);
		}, this);
		this.$el.after("<a href='#home'>Go to home</a>");
	}
});

var UserView = Backbone.View.extend({
	tagName: "li",
	initialize: function() {
		_.bindAll(this, "alertName");
		this.render();
	},
	events: {
		"click" : "alertName"
	},
	render: function() {
		this.$el.html("Hi, my name is " + this.model.id);
	},
	alertName: function() { alert(this.model.id); }
});

var Router = Backbone.Router.extend({
	routes : {
		"home" : "home",
		"users" : "users"
	},
	home : function() {
		appView.subView = new HomeView({
      $el: appView.$el.find('.page-content')
    });

    appView.render();
	},
	users : function() {
		this.view = new UsersView({
      $el: document.querySelector('.page-content')
    });
	}
});

var router = new Router();
Backbone.history.start();

$(document).ready(function(){
  appView.render();
});
*/
