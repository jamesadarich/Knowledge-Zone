define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var SpyingView = Marionette.ItemView.extend({
        template: templates['jasmine/templates/pages/spying.hbs']
    });

    return SpyingView;
  }
);
