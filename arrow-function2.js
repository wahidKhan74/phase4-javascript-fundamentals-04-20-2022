// age calculator
let ageCalculator = (yearOfBirth) => {
    let currentYear = 2022;
    if(yearOfBirth!=null && yearOfBirth!=undefined){
        let age = currentYear - yearOfBirth;
        console.log("Age : "+age);
        return age;
    } else{
        console.log("Invalid Age.");
        return 0;
    }
}


// retirement calculator
let retirementCalculator = (name,yearOfBirth) => {
    let age = ageCalculator(yearOfBirth);
    if(age>60){
        console.log(`${name} you are already retired .`);
    } else{
        console.log(`${name} you have ${60-age} years to get retired.`);
    }
}

retirementCalculator("John",1990);