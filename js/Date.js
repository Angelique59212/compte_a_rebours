class todayDate extends Decompte {
    constructor(year, month, day, hours, minutes,seconds, div, date,divDate) {
        super(year, month, day, hours, minutes,seconds, div);
        this.Date = date;
        this.divToday = divDate;
    }

    /**
     * date today
     */
    /**
     * year
     */
    getFullYear() {
        this.date.innerHTML = "Année " + this.year + "<br>";
    };

    /**
     * month
     */
    getMonth() {
        this.date.innerHTML += " Mois " +  this.month + "<br>";
    };

    /**
     * day
     */
    getDay() {
        this.date.innerHTML += "Jour " +  this.day + "<br>";
    };

    /**
     *minutes
     */
    getMinutes() {
        this.date.innerHTML += "Minutes " +  this.minutes + "<br>";
    };

    /**
     *seconds
     */
    getSeconds() {
        this.date.innerHTML += " Seconde " + this.seconds + "<br>";
    };
}

let date = new Date();
date.getFullYear();
date.getMinutes();
date.getMonth();
date.getDay();
date.getSeconds();