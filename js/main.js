const integerRndRange = (firstInteger = 1, lastInteger = 100) => {
  if (firstInteger < 0 || lastInteger < 0) {
    alert('Ошибка диапазона, включен диапазон по умолчанию [1; 100]')
    firstInteger = 1;
    lastInteger = 100;
  }

  (lastInteger<firstInteger) && ([firstInteger, lastInteger] = [lastInteger, firstInteger]);

  firstInteger = Math.ceil(firstInteger);
  lastInteger = Math.floor(lastInteger);

  return Math.round(Math.random() * (lastInteger - firstInteger) + firstInteger);
}
integerRndRange(1, 2);


const integerRndRangeFractional = (firstInteger = 1, lastInteger = 100, accuracy = 1) => {
  if (firstInteger < 0 || lastInteger < 0) {
    alert('Ошибка диапазона, включен диапазон по умолчанию [1; 100]')
    firstInteger = 1;
    lastInteger = 100;
  }

  (lastInteger<firstInteger) && ([firstInteger, lastInteger] = [lastInteger, firstInteger]);

  return Math.round((Math.random() * (lastInteger - firstInteger) + firstInteger)*(10**accuracy))/10**accuracy;
}
integerRndRangeFractional(1.12345, 10.2345678, 10);

const titleObjOffer = [
  'Где-то далеко',
  'Росиия прекрасна',
  'за рубежом бывает тоже не плохо',
  'в гостях хорошо',
  'зима время лыжников',
];
const descriptionObjOffer = [
  'Хорошее помещение',
  'я Бы пожил',
  'лучше, чем дома',
  'пятая комната не лишняя',
  'чердак в счет',
  'с кошечками в подвале не скучно',
]
const typeObjOffer = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const checkObjOffer = [
  '12:00',
  '13:00',
  '14:00',
];
const photosObjOffer = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
const featuresObjOffer = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

// создание информации об объекте
const creatureOffer = ( maxPrice = 100000, room = 10, guest = 10) => {

  const _creaturePhotos = () => {
    const _quantityPhotos = integerRndRange(1, photosObjOffer.length);
    const _photos = [];
    let _photosObjOfferEdited = photosObjOffer.map(el => el);
    for (let i=1; i<=_quantityPhotos; i++) {
      let _photo = _photosObjOfferEdited[integerRndRange(0, (_quantityPhotos - i))]
      _photos.push(_photo)
      _photosObjOfferEdited.splice(_photosObjOfferEdited.indexOf(_photo, 0), 1);
    }
    return _photos;
  }
  const _creatureFeatures = () => {
    const _quantityFeatures = integerRndRange(1, featuresObjOffer.length);
    const _features = [];
    let _featuresObjOfferEdited = featuresObjOffer.map(el => el);
    for (let i=1; i<=_quantityFeatures; i++) {
      let _feature = _featuresObjOfferEdited[integerRndRange(0, (_quantityFeatures - i))]
      _features.push(_feature)
      _featuresObjOfferEdited.splice(_featuresObjOfferEdited.indexOf(_feature, 0), 1);
    }
    return _features;
  }

  const objOffer = {
    title: titleObjOffer[integerRndRange(1, 5)-1],
    address: integerRndRangeFractional(0, 90, 5)+', '+integerRndRangeFractional(0, 360, 5),
    price: integerRndRange(1, maxPrice),
    type: typeObjOffer[integerRndRange(1, 4)-1],
    rooms: integerRndRange(1, room),
    guests: integerRndRange(1, guest),
    checkin: checkObjOffer[integerRndRange(1, 3)-1],
    checkout: checkObjOffer[integerRndRange(1, 3)-1],
    features: _creatureFeatures(),
    description: descriptionObjOffer[integerRndRange(1, 6)-1],
    photos: _creaturePhotos(),
  }
  return objOffer
}

// `cardPopup ${props.isOpen}`
// создание карточки
const creatureCard = (idUser = 1, photoNumber = -1) => {
  const card = {
    id: idUser,
    // author: {avatar: 'img/avatars/user0'+photoNumber+'.png'},
    author: {avatar: photoNumber === -1 ? 'img/avatars/default.png' : (`img/avatars/user0${photoNumber}.png`)},
    offer: creatureOffer(),
    location: integerRndRangeFractional(35.65000, 35.70000, 5)+', '+integerRndRangeFractional(139.70000, 139.80000, 5),
  }
  return card
}

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
