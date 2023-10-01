
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let laps = document.querySelector("#laps-timer");
let lapsItems = document.querySelector(".laps-items");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

//  Inserting Laps 
let i = 1;
laps.addEventListener("click", () => {
  if (milliseconds > 0) {
      const newNode = document.createElement("li")
      newNode.setAttribute("class", "items")
      lapsItems.style.display = 'block'
      const ele = `<h4>
      Id: \u00A0 ${i} \u00A0\u00A0\u00A0\u00A0\  --------> \u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0  ${timeRef.innerText}
      </h4>`
      // updating i
      i = i + 1;
      newNode.innerHTML = ele
      lapsItems.prepend(newNode)
  }
  else {
    alert("Start Timer First")
  }
})