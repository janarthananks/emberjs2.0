import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNames: ['col-xs-4', 'movie-search-group', 'input-group', 'form-group'],
  filters: ['title','director','actor','year'],
  filter:'title',
  keyword:'',
  isClear:true,
  watchKeyword: function() {
    if(Ember.isEmpty(this.get('keyword'))) {
      this.set('isClear',true);
      this.sendAction('search', '', '');
    } else {
      this.set('isClear',false);
      this.sendAction('search', this.get('keyword'), this.get('filter'));
    }
  }.observes('keyword'),
  actions:{
    selectFilter:function(filter) {
      this.set('filter', filter);
      this.set('keyword','');
    },
    search:function(keyword) {
      console.log(keyword+' in '+this.get('filter'));
      this.sendAction('search', keyword, this.get('filter'));
    },
    clearSearch: function() {
      this.set('keyword','');
      this.set('filter','title');
      this.sendAction('search', '', '');
    }
  }
});
