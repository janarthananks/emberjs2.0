import Ember from 'ember';

export function uniqueRandomNumber(randomNumbers, limit, floor/*, hash*/) {
    let randomNumber = (Math.random()*limit);
    if(floor) {
      randomNumber = Math.floor(randomNumber);
    }
    while (randomNumbers.indexOf(randomNumber)<0) {
      return randomNumber ;
    }
    return uniqueRandomNumber(randomNumbers, limit, floor);
}
export default Ember.Helper.helper(uniqueRandomNumber);
