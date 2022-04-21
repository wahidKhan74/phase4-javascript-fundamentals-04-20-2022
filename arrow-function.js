// function expression
let showMessage = function () {
    console.log("Hello, Welcome to JavaScript");
}

showMessage();

// function as arrow function
let showData = () => {
    console.log("Hello, Welcome to Arrow function");
}

showData();

let fetchData = (id, name, email) => {
    let response = `The data id : ${id} , name: ${name} , email: ${email}`;
    return response;
}

console.log(fetchData); // fetchData varaible hold complete function body.

let result = fetchData(10001,"John","john.smith@gmail.com"); // return value is always asssociated with function call.

console.log(result);