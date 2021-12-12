const divDay = document.createElement("div");
const d = new Date();

const decompte= new Decompte(2021,12,25,24,0,59, divDay);

document.body.appendChild(divDay);


divDay.style.backgroundColor = "pink";
divDay.style.width = "25rem";
divDay.style.display = "flex";
divDay.style.justifyContent = "center";
divDay.style.alignItems = "center";

decompte.timeoutRecursif();


