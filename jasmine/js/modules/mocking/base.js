define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var MockingView = Marionette.ItemView.extend({
        template: templates['jasmine/templates/pages/mocking.hbs']
    });

    return MockingView;
  }
);
