let Account = function (date, buttonStop) {
    this.date = date;
    this.buttonStop = buttonStop;
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timeout = 0;
    this.account = 0;

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

    this.dateInterval = function () {
        this.buttonStop.addEventListener("click", ()=> {
            clearInterval(this.timeout);
        });
        this.timeout = setInterval(() => {
            this.getAccount();
            div.innerHTML = "Il reste " + this.days + " jours " + this.hours + " heure " + this.minutes + " min " +
                this.seconds + " sec";
            this.dateInterval();
        }, 1000);

    }

    this.play = function () {

    }
}
