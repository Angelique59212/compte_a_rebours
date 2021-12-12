const title = document.createElement("h1");
const div = document.createElement("div");
const buttonPlay = document.createElement("button");
const buttonStop = document.createElement("button");


document.body.appendChild(title);
document.body.appendChild(div);
document.body.appendChild(buttonPlay);
document.body.appendChild(buttonStop);


const christmas = new Date(2021,11,24,24,0,0,0).getTime();

buttonPlay.innerHTML= "Play";
buttonStop.innerHTML = "Stop";
title.innerHTML = " Compte à rebours de Noël";

title.style.color = "red";
title.style.textAlign = "center";

div.style.border = "1px solid black";
div.style.width = "20rem";
div.style.margin = " 0 auto";

buttonPlay.style.width = "5rem";
buttonStop.style.width = "5rem";






let dateChristmas = new Account(christmas, buttonStop, buttonPlay);
dateChristmas.getAccount();
dateChristmas.dateInterval();











