const divDay = document.createElement("div");
document.body.appendChild(divDay);

const decompte= new Decompte(2021,12,30,12,0,59, divDay);


decompte.timeoutRecursif();


