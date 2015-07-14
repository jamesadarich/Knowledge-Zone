define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var OverviewView = Marionette.ItemView.extend({
        template: templates['jasmine/templates/pages/overview.hbs']
    });

    return OverviewView;
  }
);
