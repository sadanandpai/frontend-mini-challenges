var timer = 60;
var score = 0;
var hitRn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 70; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over🏁</h1> <h1>Your Score ${score}📌</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitRn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
makeBubble();
runTimer();
