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
  // console.log(integerRnd);
  return integerRnd;
}
integerRndRange(1, 2);

let integerRndFractional;

let integerRndRangeFractional = function (firstInteger = 1, lastInteger = 100, accuracy = 1) {
  if (firstInteger < 0 || lastInteger < 0 || lastInteger<firstInteger) {
    alert('Ошибка диапазона, включен диапазон по умолчанию [1; 100], с точностью до одного знака после запятой')
    firstInteger = 1;
    lastInteger = 100;
  }
  // firstInteger = Math.ceil(firstInteger);
  // lastInteger = Math.floor(lastInteger);
  integerRndFractional = Math.round((Math.random() * (lastInteger - firstInteger) + firstInteger)*(10**accuracy))/10**accuracy;
  // console.log(firstInteger);
  // console.log(lastInteger);
  // console.log(integerRndFractional);
  return integerRndFractional;
}
integerRndRangeFractional(1.12345, 10.2345678, 10);
