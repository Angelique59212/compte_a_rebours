let myDate;

/**
 *Create objet type todayDate
 * @param year
 * @param month
 * @param day
 * @param hours
 * @param minutes
 */
class CurrentDate {
    constructor(year, month, day, hours, minutes) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
    }

    /**
     * current year
     */
    getFullYear() {
        divMyDate.innerHTML =  myDate.getFullYear()+ "<br>";
    };

    /**
     * current month
     */
    getMonth() {
        divMyDate.innerHTML = myDate.getMonth() +  "<br>";
    };

    /**
     * current day
     */
    getDay() {
        divMyDate.innerHTML = myDate.getDay() + "<br>";
    };

}

/**
 * Object to string convers
 * @returns {string}
 */
CurrentDate.prototype.toString = ()=> {
    return this.year + " " + this.month + " " + this.day + " " + this.hours + " " + this.minutes;
};

/**
 * return description current date
 * @returns {string}
 */
CurrentDate.prototype.getDescription =  ()=> {
    const year = "Année: " + this.year;
    const month = "Mois: " + this.month;
    const day = "Jour: " + this.day;
    const hours = "Heure " + this.hours;
    const minutes = "Minutes " + this.minutes;
    return year + " , " + month + " , " + day + " , " + hours + " , " + minutes;
};