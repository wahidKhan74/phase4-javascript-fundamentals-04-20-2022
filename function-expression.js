//  A function expression is very similar to and has almost the same syntax as a function declaration but
// it uses varaible along with function body

// 1. labeled function expression
let showInfo = function showUser(){
    console.log("Hi User");
};

console.log(showInfo);

showInfo();
// showUser();  // function-expression.js:12 Uncaught ReferenceError: showUser is not defined

//function calling
// showData();  // Uncaught ReferenceError: Cannot access 'showData' before initialization

// 1. anonymous function expression
let showData = function (){
    console.log("Hello User");
};