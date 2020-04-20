const secondDiv = document.querySelector(".second-hand");
const minDiv = document.querySelector(".min-hand");
const hourDiv = document.querySelector('hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    //Seconde en degrés :  360 = au degrés et 90 = notre div alligner a 90° sur notre css
    const secDeg = ((seconds / 60) * 360 + 90); 
    // Change la propriété rotate par rapport a ntore calcule
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    const mins = now.getMinutes();
    const minDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90; 
    minDiv.style.transform = `rotate(${minDeg}deg)`;

    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourDiv.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate, 1000);