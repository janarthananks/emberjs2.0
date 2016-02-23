import Ember from 'ember';

export function randomPosition(pos/*, hash*/) {
  let position = Math.floor((Math.random() * ((pos==='left'||pos==='right')?55:40)))+'%; ';
  return pos+':'+position;
}

export default Ember.Helper.helper(randomPosition);
