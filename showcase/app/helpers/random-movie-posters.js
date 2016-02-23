import Ember from 'ember';

export function randomMoviePosters(params/*, hash*/) {

  let randomPosters = [],
      list = params[0],
      length = list.content.length;

  for(let i=0;i<10;i++) {
    let randNumber = length<=10?i:Math.floor(Math.random() * (length));
    randomPosters[i] = list.content[randNumber]._data.posterUrl;
  }

  return randomPosters;
}

export default Ember.Helper.helper(randomMoviePosters);
