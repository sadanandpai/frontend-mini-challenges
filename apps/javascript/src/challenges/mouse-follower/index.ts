const followerEl = document.getElementById('follower') as HTMLDivElement;
const speedEl = document.getElementById('speed') as HTMLInputElement;
const cursorEl = document.getElementById('cursor') as HTMLInputElement;

const currentPoint = { x: 0, y: 0 };
const targetPoint = { x: 0, y: 0 };
let cursorSpeed = speedEl.valueAsNumber;

function lerp() {
  currentPoint.x += (targetPoint.x - currentPoint.x) * cursorSpeed;
  currentPoint.y += (targetPoint.y - currentPoint.y) * cursorSpeed;
  followerEl.style.transform = `translate(${currentPoint.x}px, ${currentPoint.y}px)`;
  requestAnimationFrame(() => lerp());
}

speedEl.addEventListener('input', () => {
  cursorSpeed = speedEl.valueAsNumber;
});

cursorEl.addEventListener('change', () => {
  document.body.classList.toggle('no-cursor');
});

document.addEventListener('pointermove', (e) => {
  targetPoint.x = e.clientX - 25;
  targetPoint.y = e.clientY - 25;
});

lerp();
