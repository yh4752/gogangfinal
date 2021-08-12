import getNow from "./clock";
const ymd = document.querySelector(".ymd");
const hms = document.querySelector(".hms");

ymd.innerHTML = getNow().format('YYYY-MM-DD');

getTime();
function getTime() {
  hms.innerText = getNow().format('hh-mm-ss');
}
setInterval(getTime, 1000);