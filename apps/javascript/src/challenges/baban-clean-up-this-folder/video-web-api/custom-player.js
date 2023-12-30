const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const stopButton = document.querySelector(".stop");
const rwd = document.querySelector(".rwd");
const fwd = document.querySelector(".fwd");

const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");

let intervalRwd;
let intervalFwd;

function clearClassAndInterval() {
  fwd.classList.remove("active");
  rwd.classList.remove("active");
  clearInterval(intervalFwd);
  clearInterval(intervalRwd);
}

function playPauseMedia() {
  clearClassAndInterval();
  if (media.paused) {
    play.setAttribute("data-icon", "u");
    media.play();
  } else {
    play.setAttribute("data-icon", "P");
    media.pause();
  }
}

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute("data-icon", "P");
  clearClassAndInterval();
}

function moveBack() {
  if (media.currentTime < 2) {
    stopMedia();
  } else {
    media.currentTime -= 2;
  }
}

function moveForward() {
  if (media.currentTime >= media.duration - 2) {
    stopMedia();
  } else {
    media.currentTime += 2;
  }
}

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove("active");

  if (rwd.classList.contains("active")) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    media.play();
    play.setAttribute("data-icon", "u");
  } else {
    rwd.classList.add("active");
    media.pause();
    intervalRwd = setInterval(moveBack, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove("active");

  if (fwd.classList.contains("active")) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    media.play();
    play.setAttribute("data-icon", "u");
  } else {
    fwd.classList.add("active");
    media.pause();
    intervalFwd = setInterval(moveForward, 200);
  }
}

function updateTimer() {
  const currentTime = media.currentTime;
  const hours = Math.floor(currentTime / (60 * 24));
  const minutes =
    hours > 0
      ? Math.floor(currentTime - hours * 24 * 60)
      : Math.floor(currentTime / 60);
  const seconds =
    minutes > 0
      ? Math.floor(currentTime - minutes * 60)
      : Math.floor(currentTime);

  const hourValue = hours.toString().padStart(2, "0");
  const minuteValue = minutes.toString().padStart(2, "0");
  const secondValue = seconds.toString().padStart(2, "0");

  timer.textContent = `${hourValue}:${minuteValue}:${secondValue}`;

  const barLength = timerWrapper.clientWidth * (currentTime / media.duration);
  timerBar.style.width = `${barLength}px`;
}

play.addEventListener("click", playPauseMedia);
stopButton.addEventListener("click", stopMedia);
rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);
media.addEventListener("timeupdate", updateTimer);

media.removeAttribute("controls");
controls.style.visibility = "visible";
