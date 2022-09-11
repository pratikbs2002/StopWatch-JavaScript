var seconds = 00;
var tens = 00;
var minutes = 00;
var ResultTens = document.getElementById("tens");
var ResultSeconds = document.getElementById("seconds");
var ResultMinutes = document.getElementById("minutes");
var StartButton = document.getElementById("button-start");
var StopButton = document.getElementById("button-stop");
var RestartButton = document.getElementById("button-restart");
var interval;
StartButton.onclick = function click() {
  clearInterval(interval);
  interval = setInterval(startTimer);
};
StopButton.onclick = function () {
  clearInterval(interval);
};
RestartButton.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  ResultSeconds.innerHTML = seconds;
  ResultTens.innerHTML = tens;
  ResultMinutes.innerHTML = minutes;
};

function startTimer() {
  tens++;
  if (tens <= 9) {
    ResultTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    ResultTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    ResultSeconds.innerHTML = "0" + seconds;
    tens = 0;
    ResultTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    ResultSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    ResultMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    ResultSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    ResultSeconds.innerHTML = minutes;
  }
}
