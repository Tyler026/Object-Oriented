class Employee {
  constructor(name, salary, hireDate) {
    this._name = name;
    this._salary = salary;
    this._hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  set Name(value) {

  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}


