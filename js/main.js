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
