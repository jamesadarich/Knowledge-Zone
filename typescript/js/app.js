define(['backbone'],
  function(Backbone){

    var Router = Backbone.Router.extend({
    	routes : {
    		"" : "overview",
    		"expectations" : "expectations",
    		"mocking" : "mocking",
    		"spying" : "spying",
      	"structure" : "structure"
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
    	structure : function() {

        require(['modules/structure/base'],
        function (StructureView) {

      		this.subView = new StructureView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	},
    	mocking : function() {

        require(['modules/mocking/base'],
        function (MockingView) {

      		this.subView = new MockingView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	},
    	spying : function() {

        require(['modules/spying/base'],
        function (SpyingView) {

      		this.subView = new SpyingView({
            el: document.querySelector('.page-content')
          });

          this.subView.render();
        });
    	},
    	expectations : function() {

        require(['modules/expectations/base'],
        function (ExpectationsView) {

      		this.subView = new ExpectationsView({
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
