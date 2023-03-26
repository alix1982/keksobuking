import {integerRndRange, integerRndRangeFractional} from './util.js'
import { titleObjOffer, descriptionObjOffer, typeObjOffer, checkObjOffer, photosObjOffer, featuresObjOffer } from './data.js'

// создание информации об объекте
const _creatureOffer = ( maxPrice = 100000, room = 10, guest = 10) => {

  const _creatureArrNoRepaets = (arrayData) => {
    const _quantityElementsArrayData = integerRndRange(1, arrayData.length);
    const _outputArray = [];
    let _arrayDataEdited = arrayData.map(el => el);
    for (let i=1; i<=_quantityElementsArrayData; i++) {
      let _elementOutputArray = _arrayDataEdited[integerRndRange(0, (_quantityElementsArrayData - i))]
      _outputArray.push(_elementOutputArray)
      _arrayDataEdited.splice(_arrayDataEdited.indexOf(_elementOutputArray, 0), 1);
    }
    return _outputArray;
  }

  const _objOffer = {
    title: titleObjOffer[integerRndRange(1, 5)-1],
    address: integerRndRangeFractional(0, 90, 5)+', '+integerRndRangeFractional(0, 360, 5),
    price: integerRndRange(1, maxPrice),
    type: typeObjOffer[integerRndRange(1, 4)-1],
    rooms: integerRndRange(1, room),
    guests: integerRndRange(1, guest),
    checkin: checkObjOffer[integerRndRange(1, 3)-1],
    checkout: checkObjOffer[integerRndRange(1, 3)-1],
    features: _creatureArrNoRepaets(featuresObjOffer),
    description: descriptionObjOffer[integerRndRange(1, 6)-1],
    photos: _creatureArrNoRepaets(photosObjOffer),
  }
  return _objOffer
}

// создание объекта сданными для карточки
const creatureCardObj = (idUser = 1, photoNumber = -1) => {
  const card = {
    id: idUser,
    author: {avatar: photoNumber === -1 ? 'img/avatars/default.png' : (`img/avatars/user0${photoNumber}.png`)},
    offer: _creatureOffer(),
    location: integerRndRangeFractional(35.65000, 35.70000, 5)+', '+integerRndRangeFractional(139.70000, 139.80000, 5),
  }
  return card
}

export {creatureCardObj}
