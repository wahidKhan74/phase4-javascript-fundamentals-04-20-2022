class Account {

     // constructor to initializ properties
    constructor(id,name,balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    // member function
    showBalance() {
        return this.balance;
    }
    depositAmount(amount) {
        return this.balance+=amount;
    }
    withdrawAmount(amount) {
        return this.balance-=amount;
    }

}
// create  account object
let account = new Account(10001,"John Smith",567567.678);
console.log(account);
console.log("--------------");
console.log("id :" , account.id);
console.log("name :" , account.name);
console.log("balance :" , account.balance);

console.log("--------------");
console.log("The balance :" , account.showBalance());
console.log("The balance :" , account.depositAmount(100000));
console.log("The balance :" , account.withdrawAmount(100000));