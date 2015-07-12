define(['backbone', 'core/backbone-function/models/backbone-function-argument'],
  function(Backbone, BackboneFunctionArgument){

    var BackboneFunctionModel = Backbone.Model.extend({
      defaults: {
        name: 'functionName',
        class: 'Backbone',
        description: 'this function does all kinds of jazz'
      },
      initialize: function(options) {
        var BackboneFunctionArgumentCollection = Backbone.Collection.extend({
          model: BackboneFunctionArgument
        });
        this.set('arguments', new BackboneFunctionArgumentCollection());
      },
      toJSON: function () {
        var json = {};
        for (var property in this.attributes){
          var propertyValue = this.attributes[property];
          if (typeof(propertyValue) === 'object' && propertyValue.toJSON) {

            json[property] = propertyValue.toJSON();
          }
          else {
            json[property] = propertyValue;
          }
        }

        return json;
      }
    });

    return BackboneFunctionModel;
  }
);
