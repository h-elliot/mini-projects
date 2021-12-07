// date formatting: '[DAY] [MON 3 letters] [YEAR]'
// no commas, no extra letters
const newYears = '1 Jan 2022';

const daysLeft = document.getElementById('days-left');
const hoursLeft = document.getElementById('hours-left');
const minutesLeft = document.getElementById('minutes-left');
const secondsLeft = document.getElementById('seconds-left');

console.log(daysLeft);

// countdown function uses javascript Date(s)
// please note that time is measured in seconds (totalSeconds)
function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 3600) % 60;
	const seconds = Math.floor(totalSeconds % 60);

	console.log(days, hours, minutes, seconds);

	daysLeft.innerText = days;
	hoursLeft.innerText = formatTime(hours);
	minutesLeft.innerText = formatTime(minutes);
	secondsLeft.innerText = formatTime(seconds);

	function formatTime(time) {
		return time < 10 ? `0${time}` : time;
	}
}

// initial countdown function call
countdown();

setInterval(countdown, 1000);
