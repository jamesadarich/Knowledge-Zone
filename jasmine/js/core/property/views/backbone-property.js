define(['backbone.marionette', 'templates/core'],
  function(Marionette, templates){

    var PropertyView = Marionette.ItemView.extend({
      className: 'function',
      template: templates['jasmine/templates/core/property.hbs']
    });

    return PropertyView;
  }
);
