document.onload = coolClock();

function coolClock() {

let date = new Date();
let time = date.getTime();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let mili = date.getMilliseconds();
let A = " AM"
if(h> 11) {A = " PM";}
if(h == 24){let h = "MIDNIGHT!!"}

let clock = document.querySelector("#clock");





let renderTime =  h + ":" + m + ":" + s + ":" + A;
let render = document.querySelector("#render");
render.innerHTML = renderTime;

setInterval('coolClock()', 1000);



}
