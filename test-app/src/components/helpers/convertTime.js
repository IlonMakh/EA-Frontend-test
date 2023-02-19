export const convertTime = (timestamp) => {
  const now = Math.round(+new Date() / 1000);
  let diff = timestamp - now;
  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
  const days = Math.floor(diff / 86400);
  diff -= 86400 * days;
  const hours = Math.floor(diff / 3600);
  diff -= 3600 * hours;
  const minutes = Math.floor(diff / 60);
  diff -= 60 * minutes;
  const seconds = diff;

  return {
    days: addZero(days),
    hours: addZero(hours),
    minutes: addZero(minutes),
    seconds: addZero(seconds),
  };
};

function addZero(number) {
  const numberString = number.toString();
  if (numberString.length >= 2) return numberString;
  return "0" + numberString;
}
