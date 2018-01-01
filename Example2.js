class vehicle {
    // class should always have a Constructor in the body class.
    constructor(make, model, year) {
        // Object Properties
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new vehicle("Honda", "Civic", 2018);

console.log(myCar);