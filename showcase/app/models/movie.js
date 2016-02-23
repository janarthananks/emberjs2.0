import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  stars: DS.attr(),
  director: DS.attr(),
  certification: DS.attr(),
  releaseDate: DS.attr(),
  runningTime: DS.attr(),
  votes: DS.attr(),
  rating: DS.attr(),
  storyline: DS.attr(),
  gallery: DS.attr(),
  genre: DS.attr(),
  metascore: DS.attr(),
  poster: DS.attr(),
  releaseYear: DS.attr()
});
