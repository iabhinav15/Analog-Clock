let hourE1 = document.querySelector(".hour")
let minuteE1 = document.querySelector(".minute")
let secondE1 = document.querySelector(".second")

function updateclock(){
    let currentDate = new Date();
    setTimeout(updateclock, 1000);
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    let hourDeg = (hour/12)*360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;

    let minuteDeg = (minute/60)*360;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;

    let secondDeg = (second/60)*360;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;
    
}

updateclock();