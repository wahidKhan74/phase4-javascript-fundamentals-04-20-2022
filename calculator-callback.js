//calculator wih callback 
let calculator = function (num1, num2, callback) {
    return callback(num1,num2);
}

// add logic
let add = function(num1, num2) {
    return num1 + num2;
}

// sub logic
let sub = function(num1, num2) {
    return num1 - num2;
}

// mul logic
let mul = function(num1, num2) {
    return num1 + num2;
}

// div logic
let div = function(num1, num2) {
    return num1 + num2;
}

var x = 1000;
var y = 500;

var response = calculator(x,y,add);
console.log(`Addition : ${x} + ${y} = ${response}`);
console.log(`Substraction : ${x} - ${y} = ${calculator(x,y,sub)}`);
console.log(`Multiplication : ${x} * ${y} = ${calculator(x,y,mul)}`);
console.log(`Division : ${x} / ${y} = ${calculator(x,y,div)}`);