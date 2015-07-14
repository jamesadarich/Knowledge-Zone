define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var ExpectationsView = Marionette.ItemView.extend({
        template: templates['jasmine/templates/pages/expectations.hbs']
    });

    return ExpectationsView;
  }
);
