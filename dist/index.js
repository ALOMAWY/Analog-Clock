"use strict";
const hourAlarm = document.getElementById("hour-alarm");
const minuteAlarm = document.getElementById("minute-alarm");
const secondAlarm = document.getElementById("second-alarm");
setInterval(() => {
    let currentDate = new Date(Date.now());
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    if (hourAlarm)
        hourAlarm.style.transform = `rotate(calc(${currentHours} * 30deg))`;
    if (minuteAlarm)
        minuteAlarm.style.transform = `rotate(calc(${currentMinutes} * 6deg))`;
    if (secondAlarm)
        secondAlarm.style.transform = `rotate(calc(${currentSeconds} * 6deg))`;
}, 1000);
