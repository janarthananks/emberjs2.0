import Ember from 'ember';
// import randomModels from '../helpers/random-models-in';

export default Ember.Route.extend({
  page: null,
  limit: null,
  model() {
    this.page = Math.floor(Math.random() * 7 + 1);
	  this.limit = Math.floor(Math.random() * 15 + 15);
    return this.store.query('movie', { limit: this.get('limit'), page: this.get('page')} );
  },
  actions: {
    open: function(id, position) {
      var expLimit = 10;
      var expPage = Math.ceil(((((this.get('limit')*(this.get('page')-1))+(position+1))/expLimit)));
      this.transitionTo('movies.movie', id, {
          queryParams: {
            page: expPage,
            limit: expLimit,
            keyword: '',
            filter: ''
          }
      });
    }
  }
});
