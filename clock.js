document.addEventListener("DOMContentLoaded", function() {
let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerText = currentTime.getHours()
    min.innerText = currentTime.getMinutes()
    sec.innerText= currentTime.getSeconds()

},1000)
});