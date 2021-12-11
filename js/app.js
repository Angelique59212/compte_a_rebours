const divDay = document.createElement("div");
document.body.appendChild(divDay);

const decompte= new Decompte(1,0,0,0,0,59, divDay);


decompte.timeoutRecursif();


