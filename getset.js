class car {
    constructor(make, model, year) {
        // Underscore create a backing field to store our properties. 
        this._make = make;
        this._model = model;
        this._year = year;
    }
    get make() {
        return this._name;
    }
    set make(value) {
        const possibleMakes = ["Honda", "Toyota", "Nissan"];
        if (possibleMakes.includes(Value)) {
            this._make = value;
        } else {
            throw Error(value + "is not a valid make");
        }
    }
    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}

let myCar = new car("Nissan", "Rogue", 2018);

console.log(myCar.make = "Volvo");