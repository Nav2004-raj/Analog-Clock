// 12 hour = 360deg
// 1hour = 360/12 = 30
// h hous = 30h + m/2

// 60min = 30
// 1min = 30/60 = 1/2
// m mins = (1/2)m

// 60min = 360deg
// 1min = 360/60 = 6deg
// m min = 6m


// 60sec = 360deg
// 1sec = 360/60 = 6deg
// s sec = 6s


let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    //Getting Hour, Minutes, Seconds form Date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation = 6*mm;
    let srotation = 6*ss;

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime, 1000);