let hourshand = document.querySelector('.hours');
let minuteshand = document.querySelector('.minutes');
let secondhand = document.querySelector('.seconds');

function rotate(){
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const secondsfraction = seconds/60;
    const minutesfraction = (secondsfraction+minutes)/60;
    const hoursfraction = (minutesfraction+hours)/12;

    const secondsRotate = secondsfraction*360;
    const minutesRotate = minutesfraction*360;
    const hoursRotation = hoursfraction*360;

    secondhand.style.transform = `rotate(${secondsRotate}deg)`;
    minuteshand.style.transform = `rotate(${minutesRotate}deg)`;
    hourshand.style.transform = `rotate(${hoursRotation}deg)`;
    
    
}
setInterval(rotate,1000);