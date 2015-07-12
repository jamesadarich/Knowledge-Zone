define(['backbone'],
  function(Backbone){

    var BackbonePropertyModel = Backbone.Model.extend({
      defaults: {
        name: 'propertyName',
        class: 'Backbone',
        description: 'this property is all sorts of awesome'
      }
    });

    return BackbonePropertyModel;
  }
);
