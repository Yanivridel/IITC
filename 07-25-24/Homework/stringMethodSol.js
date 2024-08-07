
//1
function len(str){
    return str.length;
}
console.log(len("Hello"));
//2
function Upper(str){
    return str.toUpperCase();
}
console.log(Upper("Hello"));
//3
function Lower(str){
    return str.toLowerCase();
}
console.log(Lower("Hello"));
//4
function myCharAt(str,idx){
    return str[idx];
}
console.log(myCharAt("Hello",3));
//5
function mySubString(str,from,to){
    return str.slice(1,3);
}
console.log(mySubString("Hello",1,3));

//6
function rep(str,from,to){
    return str.replace(from,to);
}
console.log(rep("Hello","l","r"));
//7
function myTrim(str){
    return str.trim();
}
console.log(myTrim("   Hello   "));
//8
function myStartsWith(str,char){
    return str.startsWith(char);
}
console.log(myStartsWith("Hello","H"));
//9
function myEndsWith(str,char){
    return str.endsWith(char);
}
console.log(myEndsWith("Hello","o"));
//10
function myIndexOf(str,char){
    return str.indexOf(char);
}
console.log(myIndexOf("Hello","l"));
//11
function mySplit(str,char){
    return str.split(char);
}
console.log(mySplit("He ll o"," "));
//12
function myRepeat(str,i){
    return str.repeat(i);
}
console.log(myRepeat("Hello",7));
//13
function myCon(str1,str2){
    return str1.concat(str2);
}
console.log(myCon("Hello"," Ballow"));
//14
function myPad(str, start, char) {
    return str.padStart(start, char);
}
console.log(myPad("Hello", 8, "x"));  // Output: "xxxHello"
//15
function firstN(str,n){
    return str.slice(0,n);
}
console.log(firstN("Hello",3));
//16
function myReplace(str,from,to){
    return str.replace(from,to);
}
console.log(myReplace("Hello","ll","r"));
//17
function include(str1,str2){
    return str1.includes(str2);
}
console.log(include("Hello","el"));
//18
function last(str){
    return str[str.length-1];
}
console.log(last("Hello"));
//19
function isEmpty(str){
    return str.length===0;
}
console.log(isEmpty("Hello"));
//20
function mySlice(str,n){
    return str.slice(n);
}
console.log(mySlice("Hello",3));