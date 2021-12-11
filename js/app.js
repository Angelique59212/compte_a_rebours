const divDay = document.createElement("div");
const decompte= new Decompte(2021,12,25,24,0,59, divDay);
const date = document.createElement("div");

document.body.appendChild(divDay);
document.body.appendChild(date);

divDay.style.backgroundColor = "pink";
divDay.style.width = "25rem";
divDay.style.display = "flex";
divDay.style.justifyContent = "center";
divDay.style.alignItems = "center";

decompte.timeoutRecursif();


