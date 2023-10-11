const inputFloor = document.getElementById('input-floor');
const inputLift = document.getElementById('input-lift');
const btnSubmit = document.getElementById('btn-submit');
const form = document.getElementById('form1');
const btnReset = document.getElementById('btn-reset');
const content = document.getElementById('content');

let _floorCount = 0;
let _liftCount = 0;
let currentLift = 0;
let liftPos = [
  {
    id: 1,
    floor: 1,
  },
  {
    id: 2,
    floor: 1,
  },
  {
    id: 3,
    floor: 1,
  },
  {
    id: 4,
    floor: 1,
  },
];

const nth = function (d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

function findClosestLift(floorNumber, lifts) {
  let closestLiftId;
  let minDistance = Infinity;

  for (let i = 0; i < lifts.length; i++) {
    const lift = lifts[i];
    const distance = Math.abs(lift.floor - floorNumber);

    if (distance < minDistance && !lift.busy) {
      minDistance = distance;
      closestLiftId = lift.id;
    }
  }

  if (closestLiftId === undefined) {
    // All lifts are busy, assign the closest lift regardless of its availability
    for (let i = 0; i < lifts.length; i++) {
      const lift = lifts[i];
      const distance = Math.abs(lift.floor - floorNumber);

      if (distance < minDistance) {
        minDistance = distance;
        closestLiftId = lift.id;
      }
    }
  }

  return closestLiftId;
}

const openDoor = function (lift) {
  const liftDoorLeft = document.getElementById(`lift${lift}-door-left`);
  const liftDoorRight = document.getElementById(`lift${lift}-door-right`);
  liftDoorLeft.style.width = '0';
  liftDoorRight.style.width = '0';
  liftDoorRight.style.transition = 'all 2s';
  liftDoorLeft.style.transition = 'all 2s';
};

const closeDoor = function (lift) {
  const liftDoorLeft = document.getElementById(`lift${lift}-door-left`);
  const liftDoorRight = document.getElementById(`lift${lift}-door-right`);
  liftDoorLeft.style.width = '50%';
  liftDoorRight.style.width = '50%';
  liftDoorRight.style.transition = 'all 2s';
  liftDoorLeft.style.transition = 'all 2s';
};

btnReset.addEventListener('click', () => {
  location.reload(true);

  inputFloor.value = '';
  inputLift.value = '';
  form.style.display = 'flex';
  btnReset.style.display = 'none';
  content.style.display = 'none';
  _floorCount = 0;
  _liftCount = 0;
  currentLift = 0;
});

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let floorNumber = inputFloor.value;
  let liftNumber = inputLift.value;

  if (floorNumber > 99 || floorNumber < 1 || liftNumber < 1 || liftNumber > 4) {
    alert('floor should be betwween 1- 99 and lift value should be between 1 - 4');
  } else {
    form.style.display = 'none';
    btnReset.style.display = 'block';
    content.style.display = 'flex';
    const floorArr = Array(Number(floorNumber)).fill(0);

    for (let i = 0; i < floorNumber; i++) {
      const createSection = document.createElement('section');

      createSection.setAttribute('id', `floor-${i + 1}`);
      createSection.classList.add('section');
      createSection.innerHTML += `
    <div class="btn__group">
      <button name="${i + 1}-up" id="floor-${i + 1}_up" class="btn">Up</button>
      <button name="${i + 1}-down" id="floor-${i + 1}_down" class="btn">Down</button>
    </div>
    <div id="lift-content-${i + 1}" class="lift-content">
    </div>
    <div class="floor"></div>
    <p>${i + 1}${nth(i + 1)} floor</p>
      `;

      content.appendChild(createSection);
    }
    const btnUpTopFloor = document.getElementById(`floor-${floorNumber}_up`);
    const btnDownTopFloor = document.getElementById(`floor-${floorNumber}_down`);
    const btnDownBottomFloor = document.getElementById(`floor-1_down`);
    btnDownTopFloor.style.backgroundColor = '#ffa600';
    btnUpTopFloor.remove();
    btnDownBottomFloor.remove();

    const liftContent1 = document.getElementById('lift-content-1');
    for (let j = 0; j < liftNumber; j++) {
      _liftCount++;
      const createDiv = document.createElement('div');

      createDiv.innerHTML += `
      <div id="lift-${_liftCount}" flag="1" busy="false" class="lift lift__${_liftCount}">
        <div
          id="lift${_liftCount}-door-left"
          class="lift__door lift${_liftCount}-door-left"
        ></div>
        <div
          id="lift${_liftCount}-door-right"
          class="lift__door lift${_liftCount}-door-right"
        ></div>
      </div>
 `;
      liftContent1.appendChild(createDiv);
    }

    floorArr.map((item, index) => {
      document.addEventListener('click', function (e) {
        const currentFloor = index + 1;
        const btnUp = e.target.closest(`#floor-${currentFloor}_up`);
        const btnDown = e.target.closest(`#floor-${currentFloor}_down`);

        if (btnUp) {
          const closestLift = findClosestLift(currentFloor, liftPos);
          const lifts = document.getElementById(`lift-${closestLift}`);
          lifts.style.top = (currentFloor - 1) * -100 + '%';
          lifts.setAttribute('flag', currentFloor);
          lifts.style.transition = `all ${currentFloor * 2}s`;
          liftPos[closestLift - 1].busy = true;

          setTimeout(() => {
            openDoor(closestLift);
          }, currentFloor * 2 * 1000);

          setTimeout(() => {
            closeDoor(closestLift);
            liftPos[closestLift - 1].busy = false;
          }, currentFloor * 2 * 1000 + 2500);
        }
        if (btnDown) {
          const closestLift = findClosestLift(currentFloor, liftPos);

          const lifts = document.getElementById(`lift-${closestLift}`);
          lifts.style.top = (currentFloor - 1) * -100 + '%';
          lifts.setAttribute('flag', currentFloor);
          lifts.style.transition = `all ${currentFloor * 2}s`;
          liftPos[closestLift - 1].busy = true;

          setTimeout(() => {
            openDoor(closestLift, currentFloor);
          }, currentFloor * 2 * 1000);

          setTimeout(() => {
            closeDoor(closestLift, currentFloor);
            liftPos[closestLift - 1].busy = false;
          }, currentFloor * 2 * 1000 + 2500);
        }
      });
    });
  }
});
