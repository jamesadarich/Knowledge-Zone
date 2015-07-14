define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var StructureView = Marionette.ItemView.extend({
        template: templates['jasmine/templates/pages/structure.hbs']
    });

    return StructureView;
  }
);
