define(['backbone'],
  function(Backbone){

    var PropertyModel = Backbone.Model.extend({
      defaults: {
        name: 'propertyName',
        class: 'Backbone',
        description: 'this property is all sorts of awesome'
      }
    });

    return PropertyModel;
  }
);
