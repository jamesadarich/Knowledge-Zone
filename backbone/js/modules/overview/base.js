define(['backbone.marionette', 'templates/pages'],
  function(Marionette, templates){

    var OverviewView = Marionette.ItemView.extend({
        template: templates['backbone/templates/pages/overview.hbs']
    });

    return OverviewView;
  }
);
