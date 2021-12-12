const title = document.createElement("h1");
const div = document.createElement("div");
const buttonPlay = document.createElement("button");
const buttonStop = document.createElement("button");

//id and class for style
buttonPlay.id = "play";
buttonStop.id = "stop";
buttonPlay.className = "center";
buttonStop.className = "center";

document.body.appendChild(title);
document.body.appendChild(div);
document.body.appendChild(buttonPlay);
document.body.appendChild(buttonStop);

/**
 * create date christmas
 * @type {number}
 */
const christmas = new Date(2021,11,24,24,0,0,0).getTime();

buttonPlay.innerHTML= "Play";
buttonPlay.style.width = "5rem";
buttonPlay.style.fontSize = "2rem";

buttonStop.innerHTML = "Stop";
buttonStop.style.width = "5rem";
buttonStop.style.fontSize = "2rem";


title.innerHTML = " Compte à rebours de Noël";
title.style.color = "red";
title.style.textAlign = "center";


div.style.border = "2px double indianred";
div.style.borderRadius = "6px 6px";
div.style.boxShadow = "";
div.style.width = "33rem";
div.style.margin = "15rem auto";
div.style.textAlign = "center";
div.style.fontWeight = "bold";
div.style.fontSize = "3rem";


let dateChristmas = new Account(christmas, buttonStop, buttonPlay);
dateChristmas.getAccount();
dateChristmas.dateInterval();











