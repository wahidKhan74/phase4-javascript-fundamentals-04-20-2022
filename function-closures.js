
// Closures are nested function in javascript. 
// which has  access to three scope chain 
// 1) inner variables / paramertes  2) outer variables  / paramertes  3) global variable


var firstName = "John";  // global variable

function fullName() {

    var middleName ="William";  // outer varaible

    // nested function  // closure function
    function combine() {
        var  lastName = "Smith";  // inner varaible
        return `${firstName} ${middleName} ${lastName}`;
    }

    return combine();
}

var response = fullName();
console.log(response);