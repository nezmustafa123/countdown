const countTo = "30 April 2022";
//specify count to variable
const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000; //1000 milli seconds in one second

  const days = Math.floor(totalSeconds / 3600 / 24); //3600 seconds in an hour
  const hours = Math.floor(totalSeconds / 3600) % 24; //what's left after getting number of days
  const minutes = Math.floor(totalSeconds / 60) % 60; //get minutes divide by 60
  const seconds = Math.floor(totalSeconds) % 60;

  const countDown = document.getElementById("countdown");

  countDown.textContent = `${days}Days ${hours}Hrs : ${minutes} Min : ${seconds}s`;

  if (totalSeconds < 0) {
    //clear interval
    clearInterval(c);
    countDown.textContent = "Happy New Year";
  }
}, 1000);

function format(t) {//add 0 to time if less than 10
  return t< 10 ?
}