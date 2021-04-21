document.onload = coolClock();

function coolClock() {

let date = new Date();
let time = date.getTime();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let A = " AM"
if(h > 11) {A = " PM";}
if(h < 10) {h = "0" + h;}
if(h >= 13) {h =  "0" + (h - 12)}
if(h == 24) {A = " AM"; h = 12;}
if(m < 10) {m = "0" + m;}
if(s < 10) { s = "0" + s;}

const mv = (m /60) * 360;
document.querySelector(".min").style.transform = "rotate("+ mv+"deg)";

const hv = (h /12) * 360;
document.querySelector(".hour").style.transform = "rotate("+ hv+"deg)";

const sv = (s /60) * 360;
document.querySelector(".sec").style.transform = "rotate("+ sv+"deg)";

document.querySelector(".hour").innerHTML = h + ":" + "<br>" + m + "<br>" + A;

let renderTime =  h + ":" + m + ":" + s + ":"  + A;
let render = document.querySelector("#render");
render.innerHTML = renderTime;

setInterval('coolClock()', 1000);



}
