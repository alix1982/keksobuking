const form = document.querySelector('.ad-form');
const typeForm = form.querySelector('#type');
const priceForm = form.querySelector('#price');
const timeinForm = form.querySelector('#timein');
const timeoutForm = form.querySelector('#timeout');

function onType() {
  // console.log(priceForm.value);
  // console.log(priceForm.attributes.placeholder);
  priceForm.value = '';
  switch (typeForm.value) {
    case 'flat':
      priceForm.attributes.placeholder.textContent = '5000';
      priceForm.attributes.min.textContent = '2000';
      break;
    case 'bungalow':
      priceForm.attributes.placeholder.textContent = '6000';
      priceForm.attributes.min.textContent = '3000';
      break;
    case 'house':
      priceForm.attributes.placeholder.textContent = '7000';
      priceForm.attributes.min.textContent = '4000';
      break;
    case 'palace':
      priceForm.attributes.placeholder.textContent = '8000';
      priceForm.attributes.min.textContent = '4000';
      break;
    default:
      priceForm.attributes.placeholder.textContent = '5000';
      priceForm.attributes.min.textContent = '2000';
  }
}
typeForm.addEventListener('change', onType)

function onTime(changedForm, dependentForm) {
  const changedFormArr = Array.from(changedForm);
  const dependentFormArr = Array.from(dependentForm);
  changedFormArr.forEach((item, index)=>{
    if (item.selected) {
      item.setAttribute('selected', '');
      dependentFormArr[index].setAttribute('selected', '');
    } else {
      item.removeAttribute('selected');
      dependentFormArr[index].removeAttribute('selected');
    }
  })
}
timeinForm.addEventListener('change', ()=>onTime(timeinForm, timeoutForm))
timeoutForm.addEventListener('change', ()=>onTime(timeoutForm, timeinForm))

export {form}
