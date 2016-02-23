import Ember from 'ember';
import RandomPosition from '../helpers/random-position';
import uniqueRandomNumbers from '../helpers/unique-random-numbers';

export function randomModelsIn(params/*, hash*/) {
  let randomModels = [],
      contents = params[0].content,
      expSize = 15,
      isLeft=false,
      randomNumbers = uniqueRandomNumbers.compute(contents.length, expSize, true);
  for(let i=0;i<randomNumbers.length;i++) {
    let position = new Ember.String.htmlSafe(RandomPosition.compute('top')+RandomPosition.compute(isLeft?'left':'right'));
    randomModels.push({
      id: contents[randomNumbers[i]].id,
      style: position,
      poster: contents[randomNumbers[i]]._data.poster,
      position: randomNumbers[i],
      index: i
    });
    isLeft = isLeft?false:true;
  }
  return randomModels;
}

export default Ember.Helper.helper(randomModelsIn);
