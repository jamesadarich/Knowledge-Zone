define(['backbone'],
  function(Backbone){

    var BackboneFunctionModel = Backbone.Model.extend({
      defaults: {
        name: 'argument'
      }
    });

    return BackboneFunctionModel;
  }
);
