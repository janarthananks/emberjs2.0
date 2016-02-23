import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  isEditing: false,
  actions: {
    previous: function() {
      this.sendAction('previous', this.movie);
    },
    next: function() {
      this.sendAction('next', this.movie);
    },
    edit: function() {
      this.toggleProperty('isEditing');
    },
    save: function() {
      if(this.validate()) {
        if(this.isEditing) {
          this.toggleProperty('isEditing');
        }
        this.sendAction('save', this.movie);
      }
    },
    delete: function() {
      this.sendAction('delete', this.movie);
    }
  },
  validate: function() {
    this.set('errors', DS.Errors.create());
    if(this.movie.get('id')==='' || this.movie.get('id')===undefined || this.movie.get('id')===null) {
      this.errors.add('id',"Id cannot be empty");
    }
    if(this.movie.get('title')==='' || this.movie.get('title')===undefined) {
      this.errors.add('title',"Title cannot be empty");
    }
    if(this.movie.get('description')==='' || this.movie.get('description')===undefined) {
      this.errors.add('description',"Description cannot be empty");
    }
    if(this.movie.get('stars')==='' || this.movie.get('stars')===undefined) {
      this.errors.add('stars',"Actors cannot be empty");
    }
    if(this.movie.get('director')==='' || this.movie.get('director')===undefined) {
      this.errors.add('director',"Director cannot be empty");
    }
    if(this.movie.get('releaseYear')==='' || this.movie.get('releaseYear')===undefined) {
      this.errors.add('releaseYear',"Release Year cannot be empty");
    }
    console.log(this.get('errors'));
    return this.get('errors.isEmpty');
  }
});
