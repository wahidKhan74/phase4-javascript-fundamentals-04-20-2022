// create constructor
function Employee(id,name,salary,dept) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
}

// add new properties to prototype
Employee.prototype.state = "New York";
Employee.prototype.nationality = "American";


// add methods within prototype.
Employee.prototype.showSalary = function () {
    console.log("Salary :  ", this.salary);
    return this.salary;
}

Employee.prototype.increaseSalary = function (amount) {
    this.salary += amount;
    console.log("Salalry after increament : " , this.salary);
}

// create object
let employee1 = new Employee(10001, "Jon Smith", 546456.56, "Engineering");
employee1.name = "Jon Snow";
// employee1.nationality = "Canadian";
// employee1.state = "Toronto";
console.log(employee1);
console.log("-----------------------------");

console.log(employee1.name);
console.log(employee1.salary);

//access prototype based porpoerties
console.log(employee1.nationality);
console.log(employee1.state);

// acces method from prototype
employee1.showSalary();
employee1.increaseSalary(10000);


console.log("-----------------------------");
let employee2 = new Employee(10002, "Will Smith", 99957123.56, "Engineering");


console.log(employee2);
employee2.showSalary();
employee2.increaseSalary(10000);