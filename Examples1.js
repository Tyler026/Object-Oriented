// ES6 syntax for ( class. )

// Class Definition

class aClass {
    // Class Body
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method assinged to Class 
    sayName() {
        // Block of code to be excuted
        alert(this.name);
    }
    // Method assigned to Class 
    sayAge() {
        alert(this.age)
    }
}
// Instantiating the aClass with the "new" Keyword
const myInstance = new aClass('Tyler', 31);
myInstance.sayName(); // This how we Invoked both alert()
myInstance.sayAge();

