const navidad = "25 Dec 2020";

const dayp = document.getElementById("day");
const hoursp = document.getElementById("hours");
const minutesp = document.getElementById("minutes");
const secondsp = document.getElementById("seconds");

function countdown() {
    const navidadDate = new Date(navidad);
    const actualDate = new Date();

    const totalSeconds = (navidadDate - actualDate) / 1000;

    const dias = Math.floor(totalSeconds / 3600 / 24);

    const horas = Math.floor(totalSeconds / 3600) % 24;

    const minutos = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;
    console.log(dias, horas, minutos, seconds);

    dayp.textContent = dias;
    hoursp.textContent = horas;
    minutesp.textContent = minutos;
    secondsp.textContent = seconds;


}
countdown();

setInterval(countdown, 1000);