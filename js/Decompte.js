class Decompte {
    /**
     * create objet date christmas
     * @param year
     * @param month
     * @param day
     * @param hours
     * @param minutes
     * @param seconds
     * @param div
     */
    constructor(year, month, day, hours, minutes,seconds, div) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.div = div;
        this.run = true;
    }

    /**
     * year
     */
    getFullYear() {
        this.div.innerHTML = this.year + "<br>";
    };

    /**
     * month
     */
    getMonth() {
        this.div.innerHTML += this.month + "<br>";
    };

    /**
     * day
     */
    getDay() {
        this.div.innerHTML += this.day + "<br>";
    };

    /**
     *minutes
     */
    getMinutes() {
        this.div.innerHTML += this.minutes + "<br>";
    };

    /**
     *seconds
     */
    getSeconds() {
        this.div.innerHTML += this.seconds + "<br>";
    };

    /**
     * written date
     */
    written() {
        this.getFullYear();
        this.getMonth();
        this.getDay();
        this.getMinutes();
        this.getSeconds();
    };

    /**
     *timeout
     */
    timeoutRecursif() {
        let run = setTimeout(() => {
           this.calculateTime();
           this.written();
           this.timeoutRecursif();

        }, 100)
    };

    /**
     * decompte
     */
    calculateTime() {
        this.seconds -= 1;
        if (this.seconds === -1) {
            this.seconds = 59;
            this.minutes --;
            if (this.minutes === -1) {
                this.minutes = 59;
                this.hours--;
                if(this.hours === -1) {
                    this.hours = 24;
                    this.day--;
                    if (this.day === -1) {
                        this.day = 30;
                        this.year--;
                        if (this.year === -1) {
                            this.year = 0;
                        }
                    }
                }
            }
        }
    };
}


