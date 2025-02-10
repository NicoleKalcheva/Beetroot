class WorldClock {
    constructor(container,timezone) {
        this.container = container;
        this.timezone = timezone;
        this.createClock();
    }

    getCurrentDate(){
        const date = new Date()
    }
}