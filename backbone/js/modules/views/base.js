define(['backbone.marionette',
        'templates/pages',
        'core/backbone-function/views/backbone-function',
        'core/backbone-function/models/backbone-function',
        'core/backbone-property/views/backbone-property',
        'core/backbone-property/models/backbone-property'],
  function(Marionette,
           templates,
           BackboneFunctionView,
           BackboneFunctionModel,
           BackbonePropertyView,
           BackbonePropertyModel){

    var ViewsView = Marionette.ItemView.extend({
      template: templates['backbone/templates/pages/views.hbs'],
    	onRender: function() {



          var eventsPropertyModel = new BackbonePropertyModel({
            name: 'events',
            class: 'Backbone.View',
            description: 'events links user actions to handlers'
          });

          var eventsProperty = new BackbonePropertyView({
            model: eventsPropertyModel
          });

                  this.$el.find('.useful-properties').append(eventsProperty.render().el);

        var onRenderFunctionModel = new BackboneFunctionModel({
          name: 'onRender',
          class: 'Backbone.Marionette.View',
          description: 'onRender does all sorts of shiz'
        });

        onRenderFunctionModel.get('arguments').add({name: 'test'});
        onRenderFunctionModel.get('arguments').add({name: 'again'});

        var onRenderFunction = new BackboneFunctionView({
          model: onRenderFunctionModel
        });

        this.$el.find('.useful-functions').append(onRenderFunction.render().el);
    	}
    });

    return ViewsView;
  }
);
