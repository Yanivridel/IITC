
//1
function greet(){
    console.log("Hello World");
}
greet();
//2
function square(num){
    return num*num;
}
console.log(square(4));
//3
function isEven(num){
    return num%2===0;
}
console.log(isEven(4));
//4
function getFullName(firstName,lastName){
    return firstName + " " + lastName;
}
console.log(getFullName("Yaniv","Ridel"));
//5
function sumTwo(a,b){
    return a+b;
}
console.log(sumTwo(1,5));
//6
function multiply(a,b){
    return a*b;
}
console.log(multiply(3,8));
//7
function greetPerson(name){
    return "Hello, " + name;
}
console.log(greetPerson("Yaniv"));
//8
function getAbsoluteValue(num){
    return Math.abs(num);
}
console.log(getAbsoluteValue(-54));
//9
function calculateAverage(a,b){
    return (a+b)/2;
}
console.log(calculateAverage(34,-6));
//10
function convertToUppercase(str){
    return str.toUpperCase();
}
console.log(convertToUppercase("Wtf"));
//11
function isPositive(a){
    return a>0;
}
console.log(isPositive(3));
//12
function getFirstChar(str){
    return str[0];
}
console.log(getFirstChar("Hello"));
//13
function areaOfRectangle(w,h){
    return w*h;
}
console.log(areaOfRectangle(3,8));
//14
function remainderDivision(a,b){
    return a%b;
}
console.log(remainderDivision(3,8));
//15
function logType(x){
    return typeof x;
}
console.log(logType("f"))
//16
function invertBoolean(x){
    return !x;
}
console.log(invertBoolean(true));
//17
function concatenateStrings(str1,str2){
    return str1.concat(str2);
}
console.log(concatenateStrings("Yo, ","Hello"))
//18
function findSmaller(a,b){
    return a<b ? a:b;
}
console.log(findSmaller(4,8));
//19
function greetWithDefault(name){
    return name===undefined ? 
    "Hello Guest": "Hello, " + name;
}
console.log(greetWithDefault());
//20
function isLongString(str){
    return str.length > 10;
}
console.log(isLongString("Sttr"));

