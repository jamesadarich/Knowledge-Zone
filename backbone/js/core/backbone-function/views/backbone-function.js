define(['backbone.marionette', 'templates/core'],
  function(Marionette, templates){

    var BackboneFunctionView = Marionette.ItemView.extend({
      className: 'backbone-function',
      template: templates['backbone/templates/core/backbone-function.hbs']
    });

    return BackboneFunctionView;
  }
);
