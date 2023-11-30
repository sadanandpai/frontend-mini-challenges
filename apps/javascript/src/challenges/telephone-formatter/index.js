const phone = document.getElementById('phone');

const getStringWithNumbersOnly = (str) =>
  [...str].filter((v) => Number.isInteger(+v) && v !== ' ').join('');

const formatString = (str) => {
  const numStr = getStringWithNumbersOnly(str);
  return numStr.length > 3 ? '+(' + numStr.substring(0, 3) + ') - ' + numStr.substring(3) : numStr;
};

phone.addEventListener('input', () => (phone.value = formatString(phone.value)));
