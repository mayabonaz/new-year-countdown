// Constants and variables
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countDownDate = new Date('Jan 1, 2022 00:00:00').getTime(),
    x = setInterval(function() {
      let currentTime = new Date().getTime(),
      distance = countDownDate - currentTime;

      document.querySelector('#days').textContent = Math.floor(distance / day),
      document.querySelector('#hours').innerText = Math.floor(((distance % day)) / hour),
      document.querySelector('#minutes').innerText = Math.floor((distance % hour) / minute),
      document.querySelector('#seconds').innerText = Math.floor((distance % minute) / second);

    }, second)
