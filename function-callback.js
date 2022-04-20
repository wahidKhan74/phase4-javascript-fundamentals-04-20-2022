// function callback  ->  When we pass a function as an argument to another function.

let x = function() {
    console.log("Callback - I am X function.");
}

let y = function(callback) {
    console.log("I am Y function.");
    callback();
    // console.log(callback);
}

// passing one function as argument to another function
y(x);

y(function() {
    console.log("Callback - I am Anonymous function.");
});