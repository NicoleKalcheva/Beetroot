const car = {
    manufacturer: "Toyota",
    model: "Corolla",
    yearOfRelease: 2015,
    averageSpeed: 100, 


    displayCarInfo: function() {
        console.log(`Car Info: Manufacturer: ${this.manufacturer} Model: ${this.model} Year of Release: ${this.yearOfRelease} Average Speed: ${this.averageSpeed} km/h`);
    },

    calculateTravelTime: function(distance) {
      
        let travelTime = distance / this.averageSpeed;

       
        let numberOfBreaks = Math.floor(travelTime / 4);

        travelTime += numberOfBreaks;

        return travelTime;
    }
};

