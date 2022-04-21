// class expression syntax
let  Employee  = class  {

    constructor(id,name,salary,dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    fetchEmployee() {
        console.log(`The employee - ${this.id} - ${this.name} with salary ${this.salary}`);
    }
}

let employeeOne = new Employee('E23123',"John Smith", 3434534.54, "Engineering");
console.log(employeeOne);

console.log(employeeOne.id);
console.log(employeeOne.name);
console.log(employeeOne.salary);

employeeOne.fetchEmployee();