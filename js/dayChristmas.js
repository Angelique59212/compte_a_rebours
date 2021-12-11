let dayChristmas;

class Christmas extends CurrentDate {
    /**
     * create objet date christmas
     * @param year
     * @param month
     * @param day
     * @param hours
     * @param minutes
     */
    constructor(year, month, day, hours, minutes) {
        super(year, month, day, hours, minutes);
    }

    /**
     * year christmas
     */
    getFullYear() {
        divDayChristmas.innerHTML = dayChristmas.getFullYear() + "<br>"
    };

    /**
     * month christmas
     */
    getMonth() {
        divDayChristmas.innerHTML = dayChristmas.getMonth() + "<br>";
    };

    /**
     * day christmas
     */
    getDay() {
        divDayChristmas.innerHTML = dayChristmas.getDay() + "<br>";
    };

}

let christmas = new Christmas();
christmas.getFullYear();
christmas.getMonth();
christmas.getDay();