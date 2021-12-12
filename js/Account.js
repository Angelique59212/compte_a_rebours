/**
 * create date
 * @param date
 * @param buttonStop
 * @param buttonPlay
 * @constructor
 */
let Account = function (date, buttonStop, buttonPlay) {

    this.date = date;
    this.buttonStop = buttonStop;
    this.buttonPlay = buttonPlay;
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.account = 0;

    /**
     * difference between date
     */
    this.getAccount = function () {
        this.account = this.date - new Date().getTime();
        this.days = Math.floor(this.account / 60 / 60 / 24 / 1000);
        this.hours = Math.floor((this.account - (this.days * 60 * 60 * 24 * 1000)) / 60 / 60 / 1000);
        this.minutes = Math.floor((this.account - (this.days * 60 * 60 * 24 * 1000) - (this.hours * 60 * 60 * 1000))
            / 1000 / 60);
        this.seconds = Math.floor((this.account - (this.days * 60 * 60 * 24 * 1000) - (this.hours * 60 * 60 * 1000) -
                (this.minutes * 60 * 1000))
            / 1000);
    }

    /**
     * create listener and insert text
     */
    this.dateInterval = function () {
        this.buttonStop.addEventListener("click", ()=> {
            clearInterval(timeout);
        });
        let timeout = setInterval(() => {
            this.getAccount();
            div.innerHTML = "Il reste " + this.days + " jours " + this.hours + " heure " + this.minutes + " min " +
                this.seconds + " sec";
            this.dateInterval();
        }, 1000);
    }

    this.buttonPlay.addEventListener("click",()=> {
        this.dateInterval();
    })
}
