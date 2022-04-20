// Function : A JavaScript function is a block of code designed to perform a particular task.

// function declaration
// syntax   : function finctionName(params){   // body }


//function calling
showMessage();

// non parametrised / zero paramter function
function showMessage() {
  console.log("Hello, welcome to 'JavaScript' ");
}



// one paramter function
function showGreeting(name) {
  console.log("Today is a wonderfull day - " + name);
}

showGreeting("John Smith");
showGreeting(4564557);
showGreeting(true);
showGreeting();

// muti parametrised function
function showData(name, age, gender, status) {
  // template string or expression string
  console.log(`Hello user, ${name}
    your age is ${age}
    your gender is ${gender}
    and your status is ${status} 
    `);
}

showData();
showData("Mike SMith",59, "male", true);
showData("Ava SMith",40);

// default parametrised function
function showContactInfo(name="Default User",phone="9090909090"){
    console.log(`Hi ${name} , you  can reach us on  ${phone}`); 
}

showContactInfo();
showContactInfo("John Snow", 1010101010);