define(['backbone'],
  function(Backbone){

    var Router = Backbone.Router.extend({
    	routes : {
    		"" : "overview",
    		"models" : "models",
    		"collections" : "collections",
    		"views" : "views"
    	},
    	overview : function() {

        require(['modules/overview/base'],
        function (OverviewView) {

      		this.subView = new OverviewView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	},
    	models : function() {
        require(['modules/models/base'],
        function (OverviewView) {

      		this.subView = new OverviewView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	},
    	collections : function() {
        require(['modules/collections/base'],
        function (OverviewView) {

      		this.subView = new OverviewView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	},
    	views : function() {
        require(['modules/views/base'],
        function (OverviewView) {

      		this.subView = new OverviewView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	}
    });

    var router = new Router();
    Backbone.history.start();
  }
);
