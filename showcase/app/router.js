import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movies', function() {
    this.route('movie', {path: '/:id'});
    this.route('new');
  });
  this.route('home', {path:'/'});
});

export default Router;
