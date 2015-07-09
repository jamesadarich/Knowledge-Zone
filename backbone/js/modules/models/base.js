define(['backbone'],
  function(Backbone){

    var ModelsView = Backbone.View.extend({
      events: {
        'keydown .function-view': 'execute',
        'keydown .input-view': 'execute'
      },

      initialize: function() {
        var Model = Backbone.Model.extend({});
        this.model = new Model();
        this.model.set('name', 'test');
        this.model.set('other', 'thing');
      },
    	render: function() {
    		this.$el.html('<textarea class="input-view"></textarea><textarea class="function-view"></textarea><div class="output-view"></div>');

        this.$el.find('.input-view').text(JSON.stringify(this.model.toJSON(), null, 2));
        this.$el.find('.function-view').text('return model.get(\'name\')');
    	},

      execute: function() {
              try {
        var f = new Function('model', this.$el.find('.function-view').val());

        var m = Backbone.Model.extend({
          defaults: {
            'name': 'test'
          }
        });

          this.$el.find('.output-view').text(f(this.model));
        }
        catch (e) {
          this.$el.find('.output-view').text(e);
        }
      }
    });

    return ModelsView;
  }
);
