// var :  var keyword has function level scopr
// let : let keyword has block level scope
// const : const keyword has block level scope

function display() {
  var flag = true;
  if (flag) {
    var item1 = "Apple Mac book"; // exist in function scope
    let item2 = "Apple Iphone 13 Max Pro"; // exist in if block scope
    const item3 = "Apple Iwatch"; // exist in if block scope

    item1 = "Mac book";
    item2 = "Iphone 13 Pro";
    // item3 = "Iwatch";  // Uncaught TypeError: Assignment to constant variable.

    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  console.log("------------");
  console.log(item1);
 // console.log(item2);  // Uncaught ReferenceError: item2 is not defined
 // console.log(item3);    // Uncaught ReferenceError: item3 is not defined
}

display();
