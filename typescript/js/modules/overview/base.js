define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var OverviewView = Marionette.ItemView.extend({
        template: templates['typescript/templates/pages/overview.hbs']
    });

    return OverviewView;
  }
);
