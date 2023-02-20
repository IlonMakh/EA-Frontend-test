export function addZero(number) {
  const numberString = number.toString();
  if (numberString.length >= 2) return numberString;
  return "0" + numberString;
}
