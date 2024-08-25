// More Difficult
//21
let sign,parity,num=-15;
if(num>0){
    sign = "positive"
    if(num%2===0) parity="even";
    else parity="odd";
}else if(num<0){
    sign = "negative"
    if(num%2===0) parity="even";
    else parity="odd";
}else if(num===0){
    sign = "zero"
    if(num%2===0) parity="even";
    else parity="odd";
}

//22
let score,attendance=0.7,grade="A";
score = grade;
if(attendance<0.8){
    grade = grade.charCodeAt(0);
    grade+=1;
    grade = String.fromCharCode(grade);
}
console.log(grade);

//23
let year=2024, isCentury=false;
if(isCentury){
    if(year%400===0){
        console.log(true);
    }
    else console.log(false);
} else{
    if(year%4===0){
        console.log(true);
    }
    else console.log(false);
}

//24
let isEmployed=false,age=18;
if(isEmployed){
    if(age<30) console.log("employed student");
    else if(age<60) console.log("employed Adult");
    else console.log("not Retiree");
}
else{
    if(age<30) console.log("student");
    else if(age<60) console.log("Unemployed Adult");
    else console.log("Retiree");
}

//25
let month="October";
switch(month.toLowerCase()){
    case "january": case "december": case "february":
        console.log("Winter\n");
    case "march": case "april": case "may":
        console.log("Spring\n");
    case "june ": case "july": case "august":
        console.log("Spring\n");
    case "september  ": case "october": case "november":
        console.log("Autumn \n");
    default:
        console.log("none");
}

//26
let x=-1, y=-3;
if(x>0){
    if(y>0) console.log("1");
    else console.log("4");
}
else{ //x<0
    if(y>0) console.log("2");
    else console.log("3");
}

//27
let temperature=25,pressure =3;
if(temperature > 50){
    if(pressure > 10) console.log("gas");
    else console.log("liquid");
}else if(temperature > 20){
    if(pressure > 10) console.log("liquid");
    else console.log("solid");
}else{
    if(pressure > 10) console.log("solid");
    else console.log("gas");
}

//28
let isLeapYear = true;
month="february";
switch(month.toLowerCase()){
    case "january": case "march": case "may":
    case "july": case "august": case "october":
    case "december":
        console.log("31\n");
        break;
    case "april": case "june": case "september": case "november":
        console.log("30\n");
        break;
    case "february":
        if(isLeapYear) console.log("29");
        else console.log("28\n");
        break;
    default:
        console.log("none");
}

//29
let a=1,b=5,c=6;
let isTriangle = false;
if(a+b>c || b+c>a || a+c>b) isTriangle= true;
console.log(isTriangle);

//30
let x1,x2;
x1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
x2 = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
if(isNaN(x1)){
    if(isNaN(x2))
        console.log("Both unreal numbers");
    else
        console.log((`x1 unreal , x2 = ${x2}`));
}else{
    if(isNaN(x2)) 
        console.log(`x1 = ${x1} , x2 unreal`);
    else
        console.log((`x1 = ${x1} , x2 = ${x2}`));
}

//31
let number = 15;
console.log(number%2===0 ? "even":"odd");

//32
let canVote=true
console.log(age>=18 && canVote ? "Yes":"No");
