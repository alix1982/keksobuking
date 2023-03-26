import {integerRndRange} from './util.js'
import {creatureCardObj} from './cardObj.js'
import {photoNumbers} from './data.js'

// создание массива с информацией 10 карточек
const creatureCardsObj = () => {
  let _cards = [];

  const _creaturePhotoNumber = () => {
    let _photoNumber;
    if (photoNumbers.length === 0) {
      _photoNumber = -1;
    } else {
      _photoNumber = photoNumbers[integerRndRange(0, (photoNumbers.length-1))]
      photoNumbers.splice(photoNumbers.indexOf(_photoNumber, 0), 1);
    }
    return _photoNumber;
  }

  for (let i=1; i<=10; i++) {
    _cards.push(creatureCardObj(i, _creaturePhotoNumber()))
  }
  return _cards;
}

export {creatureCardsObj}
