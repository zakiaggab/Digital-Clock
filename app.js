
function clock() {
const fullDate = new Date();
let hours = fullDate.getHours();
let mins = fullDate.getMinutes();
let sec = fullDate.getSeconds();

if (hours < 10) {
    hours = "0" + hours;
}
if (mins < 10) {
    mins = "0" + mins;
}
if (sec < 10) {
    sec = "0" + sec;
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ": " + mins;
document.getElementById('second').innerHTML = ": " + sec;
}

setInterval(clock,100);

