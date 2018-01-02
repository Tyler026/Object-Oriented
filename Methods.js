// Methods in a class, simply refers to a function that has been created in the class. 

class Person {
    constructor(name) {
        // Method
        this.name = name;
    }
    // Method
    run() {
        console.log(this.name + " is running.");
    }
    walk() {
        console.log(this.name + " is walking");
    }
    greeting() {
        console.log("Hello my name is " + this.name + ".");
    }
}


let andrew = new Person ("Andrew");
andrew.run();
andrew.walk();
andrew.greeting();