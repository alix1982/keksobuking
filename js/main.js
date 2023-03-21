import {integerRndRange} from './util.js'
import {creatureCard} from './card.js'

// создание массива из 10 карточек
const creatureCards = () => {
  let _cards = [];
  let _photoNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const _creaturePhotoNumber = () => {
    let _photoNumber;
    if (_photoNumbers.length === 0) {
      _photoNumber = -1;
    } else {
      _photoNumber = _photoNumbers[integerRndRange(0, (_photoNumbers.length-1))]
      _photoNumbers.splice(_photoNumbers.indexOf(_photoNumber, 0), 1);
    }
    return _photoNumber;
  }

  for (let i=1; i<=10; i++) {
    _cards.push(creatureCard(i, _creaturePhotoNumber()))
  }
  return _cards;
}
creatureCards();


