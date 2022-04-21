class Employee {

    constructor(id,name,salary,dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    getId() {
        return this.id;
    }
    setId(id){
        this.id = id;
    }

    getName() {
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getSalary() {
        return this.salary;
    }
    setSalary(salary){
        this.salary = salary;
    }


    fetchEmployee() {
        console.log(`The employee - ${this.id} - ${this.name} with salary ${this.salary}`);
    }
}

let employeeOne = new Employee('E23123',"John Smith", 3434534.54, "Engineering");

console.log("------------------------");
employeeOne.fetchEmployee();
console.log("------------------------");
//set properties
employeeOne.setId("E100001");
employeeOne.setName("John Snow");
employeeOne.setSalary(78678.87);

console.log(employeeOne.getId());
console.log(employeeOne.getName());
console.log(employeeOne.getSalary());