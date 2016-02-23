import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    keyword: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    }
  },
  page: null,
  limit: null,
  keyword: null,
  filter: null,
  model(params) {
    this.page = params.page;
    this.limit = params.limit;
    this.keyword = params.keyword;
    this.filter = params.filter;
    return this.store.query('movie', params);
  },
  actions: {
    willTransition: function(transition) {
      // this.set('keyword','');
      // this.set('filter','');
      console.log(transition);
    },
    search: function (keyword, filter) {
      console.log('search in '+filter+' for keyword '+keyword);
      this.transitionTo('movies', {
        queryParams: {
          page: 1,
          limit: 10,
          keyword: keyword,
          filter: filter
        }
      });
    },
    nextPage: function () {
      let total = this.modelFor('movies').get('meta').total;
  		if((total/(this.get('page')*this.get('limit')))>1) {
  			this.incrementProperty('page');
  			this.transitionTo('movies', {
  			  queryParams: {
  				page: this.get('page'),
  				limit: this.get('limit')
  			  }
  			});
  		}
    },
    previousPage: function () {
      if (this.page > 1) {
        this.decrementProperty('page');
        this.transitionTo('movies',{
          queryParams: {
            page: this.get('page'),
            limit: this.get('limit')
          }
        });
      }
    }
  }
});
