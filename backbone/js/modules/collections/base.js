define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var CollectionsView = Marionette.ItemView.extend({
          template: templates['backbone/templates/pages/collections.hbs']
    });

    return CollectionsView;
  }
);
