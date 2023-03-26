
//создание карточки из template с id=card
const cardTemplate = document.querySelector('#card').content;
function creatureCard(cardObj) {
  const card = cardTemplate.querySelector('.popup').cloneNode(true);

  const avatar = card.querySelector('.popup__avatar');
  avatar.attributes.src.textContent = cardObj.author.avatar;

  const title = card.querySelector('.popup__title');
  title.textContent = cardObj.offer.title;

  const textAddress = card.querySelector('.popup__text--address');
  textAddress.textContent = cardObj.offer.address;

  const textPrice = card.querySelector('.popup__text--price');
  textPrice.textContent = cardObj.offer.price + ' ₽/ночь';

  const type = card.querySelector('.popup__type');
  switch (cardObj.offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    default:
      type.textContent = 'Просто хорошее жилье';
  }

  const textCapacity = card.querySelector('.popup__text--capacity');
  textCapacity.textContent = cardObj.offer.rooms + ' комнаты для ' + cardObj.offer.guests + ' гостей';

  const textTime = card.querySelector('.popup__text--time');
  textTime.textContent = 'Заезд после ' + cardObj.offer.checkin + ', выезд до ' + cardObj.offer.checkout;

  const featureArr = Array.from(card.querySelectorAll('.popup__feature'))
  const featureArrType = featureArr.map((feature)=> feature.classList[1].substring(16));
  featureArrType.forEach((itemFeatureArrAll, index)=>{
    (!cardObj.offer.features.some((item)=>item === itemFeatureArrAll)) && (featureArr[index].remove())
  })

  const description = card.querySelector('.popup__description');
  description.textContent = cardObj.offer.description;

  const photos = card.querySelector('.popup__photos');
  const photo = card.querySelector('.popup__photo').cloneNode(true);
  const photoArr = Array.from(card.querySelectorAll('.popup__photo'));
  cardObj.offer.photos.forEach((item, index)=>{
    (photoArr[index] === undefined) && (photoArr.push(photo));
    photoArr[index].attributes.src.textContent = item;
    photos.appendChild(photoArr[index]);
  })
  return card
}

// отрисовка карточки в container
const container = document.querySelector('.map__canvas');
function renderingCard(cardObj) {
  container.appendChild(creatureCard(cardObj))
}

export {renderingCard}
