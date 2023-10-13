// Initialising variables of the game
const animals = {
	'🐭': '🐁',
	'🐶': '🐕',
	'🐷': '🐖',
	'🐮': '🐄',
	'🐯': '🐅',
	'🐔': '🐓',
	'🐵': '🐒',
	'🐲': '🐉',
	'🐴': '🐎',
	'🐰': '🐇',
}

// Audion variables
const bgMusic = new Audio();
bgMusic.src = 'https://drive.google.com/uc?export=download&id=1Y2NcCVRjdQypNCXcj6t-hu8GdqMxMcPS';
bgMusic.volume = 0.2;

const winSound = new Audio();
winSound.src = 'https://drive.google.com/uc?export=download&id=1_U-FQd0q9ZTfnDQTEBtM8ZB0gf-cEUwL';

const looseSound = new Audio();
looseSound.src = 'https://drive.google.com/uc?export=download&id=19tUhCzCGyNX9Es2xqiAcJpyklQ7L7I3_';

// number of elements in the animals dictionary
const n = Object.keys(animals).length;

// Initialising body variables
const wholeBody = document.querySelector(".whole-body");
const again = document.querySelector(".again");
const faces = Array.from(document.querySelectorAll(".face"));

// Generating random numbers of different ids
function randomArray() {
	let arr = [];
	for(let i = 0; i < faces.length; i++) {
		let id = Math.floor(Math.random() * n);
		while(arr.includes(id)) {
			id = Math.floor(Math.random() * n);
		}
		arr.push(id);
	}
	return arr;
}

// Filling random faces of the game
function fillFaces() {
	let arr = randomArray();
	for(let i = 0; i < faces.length; i++) {
		faces[i].innerHTML = Object.keys(animals)[arr[i]];
	}
	let id = arr[Math.floor(Math.random() * arr.length)];
	wholeBody.innerHTML = Object.values(animals)[id];
}

// Verifying the corrent answer of the game
function winner() {
	faces.forEach((face)=> {
		face.addEventListener('click', ()=> {
			bgMusic.pause();
			let clickedFace = face.innerHTML;
			if(animals[clickedFace] == wholeBody.innerHTML) {
				face.classList.add('right');
				winSound.play();
				winSound.addEventListener('ended', ()=> {
					location.reload();
				});
			} else {
				face.classList.add('wrong');
				looseSound.play();
				looseSound.addEventListener('ended', ()=> {
					location.reload();
				});
			}
		});
	});
}

// Initialising game
function init() {
	bgMusic.play();
	fillFaces();
	winner();
}

// functioning of the play again button
again.addEventListener('click', init);

// Game started
init();