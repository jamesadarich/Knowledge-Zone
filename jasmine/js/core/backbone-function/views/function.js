define(['backbone.marionette', 'templates/core'],
  function(Marionette, templates){

    var FunctionView = Marionette.ItemView.extend({
      className: 'function',
      template: templates['jasmine/templates/core/function.hbs']
    });

    return FunctionView;
  }
);
