define(['backbone.marionette', 'templates/core'],
  function(Marionette, templates){

    var BackbonePropertyView = Marionette.ItemView.extend({
      className: 'backbone-function',
      template: templates['backbone/templates/core/backbone-property.hbs']
    });

    return BackbonePropertyView;
  }
);
