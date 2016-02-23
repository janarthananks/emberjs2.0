import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('movie');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('errors', DS.Errors.create());
  },
  actions: {
    save: function(param){
      var that = this;
      this.controllerFor('movies.new').set('errors',DS.Errors.create());
      param.save().then(function() {
        that.transitionTo('movies.movie',param.id);
      }, function(reason) {
        var errors = DS.Errors.create();
        for (var i=0;  i<reason.errors.length; i++) {
          errors.add(reason.errors[i].attribute, reason.errors[i].message);
        }
        that.controllerFor('movies.new').set('errors',errors);
      });
    },
    willTransition: function (transition) {
      var model = this.modelFor('movies.new');
      if (model.get('isNew')) {
        console.log(transition);
        model.destroyRecord();
      }
    }
  }
});
