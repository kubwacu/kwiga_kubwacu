const deadLine = new Date("2022-02-14 00:00").getTime();

var daysContent = document.querySelector(".days .content");
var hoursContent = document.querySelector(".hours .content");
var minutesContent = document.querySelector(".minutes .content");
var secondesContent = document.querySelector(".secondes .content");

var daysDescription = document.querySelector(".days .description");
var hoursDescription = document.querySelector(".hours .description");
var minutesDescription = document.querySelector(".minutes .description");
var secondesDescription = document.querySelector(".secondes .description");

function countDown() {
    
    const secondUnit = 1000,
        minuteUnit = 60 * secondUnit,
        hourUnit = 60 * minuteUnit,
        dayUnit = 24 * hourUnit;
    
    let now = new Date().getTime();
    let millisecondesLeft = deadLine - now;
    
    let daysLeft = Math.trunc(millisecondesLeft / dayUnit);
    let hoursLeft = Math.trunc((millisecondesLeft % dayUnit) / hourUnit);
    let minutesLeft = Math.floor((millisecondesLeft % hourUnit) / minuteUnit);
    let secondesLeft = Math.floor((millisecondesLeft % minuteUnit) / secondUnit);

    daysContent.innerHTML = daysLeft;
    hoursContent.innerHTML = hoursLeft;
    minutesContent.innerHTML = minutesLeft;
    secondesContent.innerHTML = secondesLeft;

   
    if (daysLeft <= 1) 
        daysDescription.innerHTML = "Jour";
    else
        daysDescription.innerHTML = "Jours"
    
    if (hoursLeft <= 1)
        hoursDescription.innerHTML = "Heure";
    else
        hoursDescription.innerHTML = "Heures";
    
    if (minutesLeft <= 1)
        minutesDescription.innerHTML = "Minute";
    else
        minutesDescription.innerHTML = "Minutes";

    if (secondesLeft <= 1) 
        secondesDescription.innerHTML = "Seconde";
    else 
        secondesDescription.innerHTML = "Secondes";
}

setInterval(countDown, 1000);
