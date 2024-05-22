let hours = 10
let minutes = 59
let seconds = 60

let time = seconds + minutes * 60 + hours * 60 * 60;
console.log(time);

let countdown = setInterval(function() {
    time--;

    seconds = time % 60;
    minutes = Math.floor( (time % (60 * 60)) / 60 );
    hours = Math.floor( (time % (60 * 60 * 24)) / (60 * 60) );
    console.log(hours, minutes, seconds); 

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


}, 1000);
