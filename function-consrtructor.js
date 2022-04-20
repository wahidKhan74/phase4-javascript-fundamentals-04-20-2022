//  The Function constructor creates a new Function object.
function Account(id, name, balance, email) {
    this.id = id;
    this.name= name;
    this.balance = balance;
    this.email = email;
}

let account1 = new Account(1001,"john snow", 54656.67,"john.snow@gmail.com");
let account2 = new Account(1002,"aria snow", 11126.67,"aria.snow@gmail.com");
let account3 = new Account(1003,"will snow", 89896.67,"will.snow@gmail.com");


console.log(account1);

console.log("------------------------");
console.log(account1.id);
console.log(account1.name);
console.log(account1.balance);
console.log(account1.email);
console.log("------------------------");

console.log(account2);
console.log(account3);
