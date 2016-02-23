import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.store.findRecord('movie', param.id);
  },
  index: function(id, mode) {
	  var model = this.modelFor('movies');
	  var index = null;
    for(var i=0; i<model.content.length; i++) {
	    if(model.content[i].id===id) {
	      index = i;
        break;
		  }
	  }
	  index = (mode==='prev' && index>0)?model.content[index - 1].id:
			  ((mode==='next' && index < model.content.length - 1)?model.content[index + 1].id:
			   null);
	  return index;
	},
	actions: {
    previous: function previous(param) {
	    var index = this.index(param.id, 'prev');
      if (index) {
        this.transitionTo('movies.movie', index);
      }
    },
    next: function next(param) {
      var index = this.index(param.id, 'next');
      if (index) {
        this.transitionTo('movies.movie', index);
      }
    },
    save: function(param) {
      param.save();
    },
    delete: function(param) {
      var that = this;
      param.destroyRecord().then(function() {
        that.transitionTo('movies');
      }
    );
    }
  }
});
