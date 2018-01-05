class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  get Name() {
    console.log(this.name.toUpperCase());
   }
  get Salary() {
    console.log(this.salary);
  }
  get HireDate() {
    console.log(this.hireDate);
  }
}
class Manager extends Employee {
  constructor(job, years, degree, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.job = job;
    this.years = years;
    this.degree = degree;
  }
  jobDescription() {
    console.log(this.job);
  }
  yearsExperience() {
    console.log(this.years);
  }
  degreeComleted() {
    console.log(this.degree);
  }
}

let Employee1 = new Manager ("Development", 2018, "Masters");
Employee1.jobDescription();
Employee1.yearsExperience();
Employee1.degreeComleted();
let newEmployee = new Employee ("tyler", 1500, "January 5th")
newEmployee.Name;
newEmployee.Salary;
newEmployee.HireDate;
