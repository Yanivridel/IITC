let firstName = "Yaniv";
let lastName = "Ridel";
let age = 23;
let isStudent = true;
let isAdult = age > 18;
let isMember = true;
let isJohn = firstName === "John";
let isCitizen = true;
let email = "yanivridel@gmail.com";

function greet(firstName,lastName){
    let fullName = `${firstName} ${lastName}`.toUpperCase();
    return `Hello, ${fullName}! Welcome to the IITC Bootcamp.`
}

console.log(greet(firstName,lastName));

if(age<=13) console.log("You are a child.");
if(13<age && age <= 17) console.log("You are a teenager.");
if(17<age && age <= 64) console.log("You are an adult.");
if(64<age) console.log("You are a senior.");

function getDayMessage(dayOfWeek){
    switch (dayOfWeek){
        case "Monday":
            console.log("Start of the work week!");
            break;
        case "Tuesday":
            console.log("Second day of the work week!");
            break;
        case "wednesday":
            console.log("Third of the work week!");
            break;
        case "Thursday":
            console.log("Fourth of the work week!");
            break;
        case "Friday":
            console.log("Its Friday!!");
            break;
        case "Saturday":
                console.log("End of the work week!");
                break;
        case "Sunday":
                console.log("End of the work week!");
                break;
        default:
            console.log("Invalid day!");
    }
}

getDayMessage("Monday");
getDayMessage("sf");

function checkEligibility(age,isStudent){
    if(isStudent){
        if(age<18) console.log("You are a minor student.");
        else if(age<24) console.log("You are a young adult student.");
        else console.log("You are an adult student.");
    }
    else{ //NOT STUDENT
        if(age<18) console.log("You are a minor non-student.");
        else if(age<24) console.log("You are a young adult non-student.");
        else console.log("You are an adult non-student.");
    }
}

checkEligibility(age,isStudent);

function formatName(name){
    name = name.trim().toLowerCase()
    if(name === "admin") return "Welcome, Admin!"
    return `Hello, ${name}!`
}

console.log(formatName("    AdMiN    "));

function checkDiscount(age,isMember){
    if(age<18){ // 17--
        if(isMember) return "You get a 20% discount.";
        else return  "You get a 10% discount.";
    }
    else if(age<64){  // 18-64
        if(isMember) return "You get a 10% discount.";
        else return  "No discount available.";
    }
    else{  //64++
        if(isMember) return "You get a 30% discount.";
        else return  "You get a 30% discount.";
    }
}

console.log(checkDiscount(age,isMember));

function validateLogin(username ,password){
    let storedUsername = "BaBa";
    let storedPassword = "PassBaBa";
    if(username===storedUsername && password===storedPassword)
        return "Login successful."
    return "Invalid username or password."
}

console.log(validateLogin("BaBa","PassBaBa"));

function extractInitials(firstName,lastName){
    return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;
}

console.log(extractInitials(firstName,lastName));

function maskEmail(email){
    let beforeStrudel = email.split("@")[0];
    return email.replace(beforeStrudel,"*****");
}

console.log(maskEmail(email));

function gradeCalculator(score){
    if(score>90) return "A";
    else if (score>80) return "B";
    else if (score>70) return "C";
    else if (score>60) return "D";
    else return "F";
}

console.log(gradeCalculator(98.5));

function canVote(age,isCitizen){
    if(age>=18 && isCitizen) return "You are eligible to vote.";
    return "You are not eligible to vote.";
}

console.log(canVote(age,isCitizen));

function convertToUpperCaseAndAddAge(name,age){
    return `${name.toUpperCase()}${age.toString()}`;
}

console.log(convertToUpperCaseAndAddAge(firstName,age));

function capitalize(word){
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfWord = word.substring(1);
    return firstLetter + restOfWord;
}

console.log(capitalize("how are you?"));

function containsSubstring(mainString,subString){
    return mainString.includes(subString);
}

console.log(containsSubstring("How are you", "re yo"));