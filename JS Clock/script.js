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

	const hour = now.getHours();
	const hourDegress = hour * 30 + 90;
	hourHand.style.transform = `rotate(${hourDegress}deg)`;
}

setInterval(setClock, 1000);
