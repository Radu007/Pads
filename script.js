const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const colors = [
	'60d394',
	'd36060',
	'c060d3',
	'd3d160',
	'6860d3',
	'60b2d3'
];
window.addEventListener('load', () => {

	pads.forEach((pad, index) => {
		pad.addEventListener('click', function () {
			sounds[index].currentTime = 0;
			sounds[index].play();

			const createBubbles = function (index) {
				const bubble = document.createElement("div");
				visual.appendChild(bubble);
				bubble.style.background = `#${colors[index]}`;
				bubble.style.animation = 'jump 1s ease';

			};

			createBubbles(index)
		});
		});
	});

const createBubbles = function (index) {
	const bubble = document.createElement("div");
	visual.appendChild(bubble);
	bubble.style.background = `#${colors[index]}`;
	bubble.style.animation = 'jump 1s ease';
	bubble.addEventListener('animationend', function () {  
		visual.removeChild(this);
	});
};
