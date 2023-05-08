const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = seconds * 6 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegress = mins * 6 + 90;
	minHand.style.transform = `rotate(${minsDegress}deg)`;

	console.log(secondsDegrees);
}

setInterval(setClock, 1000);
