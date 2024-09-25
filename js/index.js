"use strict";

var hourAlarm = document.getElementById("hour-alarm");
var minuteAlarm = document.getElementById("minute-alarm");
var secondAlarm = document.getElementById("second-alarm");
setInterval(function () {
  var currentDate = new Date(Date.now());
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentSeconds = currentDate.getSeconds();
  if (hourAlarm) hourAlarm.style.transform = "rotate(calc(".concat(currentHours, " * 30deg))");
  if (minuteAlarm) minuteAlarm.style.transform = "rotate(calc(".concat(currentMinutes, " * 6deg))");
  if (secondAlarm) secondAlarm.style.transform = "rotate(calc(".concat(currentSeconds, " * 6deg))");
}, 1000);