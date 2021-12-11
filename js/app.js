const divMyDate = document.createElement("div");
const divDayChristmas = document.createElement("div");
document.body.appendChild(divMyDate);
document.body.appendChild(divDayChristmas);

const today = new CurrentDate(2021,11,11,12,17);
const christmasDay = new Christmas(2021,11,25,24,"");

divMyDate.innerHTML = today.toString();
divDayChristmas.innerHTML = christmasDay.toString();

today.getDescription();
christmasDay.getDescription();