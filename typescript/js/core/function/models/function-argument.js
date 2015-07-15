define(['backbone'],
  function(Backbone){

    var FunctionArgumentModel = Backbone.Model.extend({
      defaults: {
        name: 'argument'
      }
    });

    return FunctionArgumentModel;
  }
);
