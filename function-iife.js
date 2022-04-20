// IIFE : Imediately invoked function expression. -> self executing function

// syntax
(function () {
    console.log("I am Imediately invoked function expression.")
}) ();

// self executing  :: load / initialize
(function() {
    let username = "John Smith";
    let email = "john.smith@gmail.com";
    function display() {
        console.log(username);
        console.log(email);
    }

    display();
})();
