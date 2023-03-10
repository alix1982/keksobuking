let integerRnd;
let integerRndRange = function (firstInteger = 1, lastInteger = 100) {
  if (firstInteger < 0 || lastInteger < 0 || lastInteger<firstInteger) {
    alert('Ошибка диапазона, включен диапазон по умолчанию [1; 100]')
    firstInteger = 1;
    lastInteger = 100;
  }
  firstInteger = Math.ceil(firstInteger);
  lastInteger = Math.floor(lastInteger);
  integerRnd = Math.round(Math.random() * (lastInteger - firstInteger) + firstInteger);
  // console.log(firstInteger);
  // console.log(lastInteger);
  console.log(integerRnd);
  return integerRnd;
}
integerRndRange()
// console.log(integerRndRange(2,1))
