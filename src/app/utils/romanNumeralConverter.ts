export default function convertDecimalToRoman(decimalNumber): string {
  const romanNum = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  const dNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  if (decimalNumber <= 0 || decimalNumber >= 4000) return decimalNumber;
  var romanNumeral = '';
  for (var i = 0; i < romanNum.length; i++) {
    while (decimalNumber >= dNum[i]) {
      decimalNumber -= dNum[i];
      romanNumeral += romanNum[i];
    }
  }
  return romanNumeral;
}
