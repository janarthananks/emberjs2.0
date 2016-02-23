import Ember from 'ember';
import uniqueRandomNumber from '../helpers/unique-random-number';

export function uniqueRandomNumbers(limit, expSize, floor/*, hash*/) {
  let randomNumbers = [];
  expSize = limit<=expSize?limit:expSize;
  for(let i=0; i<expSize; i++) {
    randomNumbers.push(limit<=expSize?i:uniqueRandomNumber.compute(randomNumbers, limit, floor));
  }
  return randomNumbers;
}

export default Ember.Helper.helper(uniqueRandomNumbers);
