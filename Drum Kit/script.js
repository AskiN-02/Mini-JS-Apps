function removeTransition(e) {
	e.target.classList.remove('playing');
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}
function playSoundMouseClick(keyCode) {
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`div[data-key="${keyCode}"]`);
	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
keys.forEach((key) =>
	key.addEventListener('click', (e) => {
		playSoundMouseClick(e.target.getAttribute('data-key'));
	})
);

window.addEventListener('keydown', playSound);
