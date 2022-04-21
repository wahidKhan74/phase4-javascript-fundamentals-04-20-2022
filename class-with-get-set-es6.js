class Employee {

    constructor(id,name,salary,dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    // es6 get and set methods.
    get Id() {
        return this.id;
    }
    set Id(id){
        this.id = id;
    }

    get Name() {
        return this.name;
    }
    set Name(name){
        this.name = name;
    }

    get Salary() {
        return this.salary;
    }
    set Salary(salary){
        this.salary = salary;
    }


    fetchEmployee() {
        console.log(`The employee - ${this.id} - ${this.name} with salary ${this.salary}`);
    }
}

let employeeOne = new Employee('E23123',"John Smith", 3434534.54, "Engineering");

// set properties
employeeOne.Id = "E100001";
employeeOne.Name = "John Snow";
employeeOne.Salary = 78678.87;

console.log(employeeOne.Id);
console.log(employeeOne.Name);
console.log(employeeOne.Salary);