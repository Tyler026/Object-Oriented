class stadium {
    constructor (name, city, capacity, sport, seats) {
        this.name = name;
        this.city = city;
        this.capacity = capacity;
        this.sport = sport;
        this.seats = seats;
    }
    describeStadium() {
        console.log("The " + this.name + " is in " + this.city + " and holds " + this.capacity + " fans.");
    }
    sportsPlayed() {
        console.log("The following sport is mainly played in the stadium: " + this.sport);
    }
    seatsAvailable() {
        console.log("There are " + this.seats + " seats still available for tonight's game");
    }
}

let stadium1 = new stadium("Mercedes Benz Arena", "Atlanta", 70000, "football", 1500);
stadium1.describeStadium();
stadium1.sportsPlayed();
stadium1.seatsAvailable();

//The Mercedes Benz Arena is in Atlanta and holds 70000 fans.
//The following sport is mainly played in this stadium: Football
//There are 15000 seats still available for tonight's game.
