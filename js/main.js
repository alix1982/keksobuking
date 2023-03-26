import {renderingCard} from './card.js'
import {creatureCardsObj} from './cardsObj.js'
import {form} from './form.js';

const cardsObj = creatureCardsObj();
renderingCard(cardsObj[1])
// cardsObj.forEach((item)=>{
//   renderingCard(item);
// })

// console.log(cardsObj);
