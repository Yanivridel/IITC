
let i=0;
//1
console.log("Task 1");
for(i=1;i<=20;i++){
    console.log(i);
}
//2
console.log("Task 2");
for(i=1;i<=15;i+=2){
    console.log(i);
}
//3
// console.log("Task 3");
// let num;
// do{
//     num= parseInt(prompt("Enter Number 1-10"));
// }while(isNaN(num) || num>10 || num<1)
// console.log(num);
//4
console.log("Task 4");
let sum=0;
for(i=1;i<=100;i+=1){
    sum+=i;
}
console.log(sum);
//5
console.log("Task 5");
for(i=10;i>=1;i-=1){
    console.log(i);
}
console.log("Blast Off!");

//6
console.log("Task 6");
let fib0=0,fib1=1,fib2;
console.log(fib0);
console.log(fib1);
for(i=2;i<=10;i+=1){
    fib2=fib0+fib1;
    fib0=fib1;
    fib1=fib2;
    console.log(fib2);
}
//7
console.log("Task 7");
let valid =3;
let guess =0;
while(guess!==valid){
    guess = getRandom(1,6);
    console.log(guess);
}

function getRandom(min,max){
    return random = Math.floor(Math.random() * (max-min+1) + min);
}

//8
console.log("Task 8");
for(i=1;i<=10;i+=1){
    console.log(i*7);
}
//9
console.log("Task 9");
num=1001;
while(num%7!==0 || num%3!==0){
    num+=1;
}
console.log(num);
//10
console.log("Task 10");
let fact=1;
num=6;
for(i=2;i<=num;i++){
    fact*=i;
}
console.log(fact);
//11
console.log("Task 11");
valid = 11;
guess =0;
do{
    guess=getRandom(1,20);
    console.log(guess);
    if(guess>valid) console.log("Lower");
    else if(guess<valid) console.log("Higher");
    else console.log("Got it!");
}while(guess!=valid)
//12
console.log("Task 12");
let flg=0;
num = 97;
for(i=2;i*i<=num;i++){
    if(num%i==0){
        flg=1
        break;
    }
}
console.log(flg?"Not prime!":"Prime!");
//13
console.log("Task 13");
res = "";
num=8; // 1000
while(Math.floor(num)!==0){
    res = (num%2==1 ? "1":"0") + res; 
    num = Math.floor(num/2);
}
console.log(res);
//14
console.log("Task 14");
for(i=1;i<=5;i++){
    console.log(i.toString().repeat(i));
}
//15
// console.log("Task 15");
// Calculator assignment
//16
console.log("Task 16");
let a = 56784;
let b = 98304;
let temp;
while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
}
let gcd = a;
console.log(gcd);

//17
console.log("Task 17");
let str = "Hello, my name is Yanivz"
let strAfter = "";
let shift = 7;
str = str.toLowerCase();
for(i=0;i<str.length;i++){
    let ascii = str.charCodeAt(i);
    if(97<= ascii && ascii<=122){
        let char =  ascii+shift;
        if(char<=122) strAfter += String.fromCharCode(char);
        else strAfter += String.fromCharCode((ascii+shift)%122 + 96);
    }
    else{
        strAfter += str[i];
    }
}
console.log(`Str:${str}\nStrAfter:${strAfter}`);
//18
console.log("Task 18");
for(i=1;i<=10;i++){
    console.log(2**i);
}
//19
console.log("Task 19");
let count =0;
let coin;
do{
    coin = getRandom(0,1);
    console.log(coin);
    if(coin===1) count++;
    else count=0;
} while(count<3)

//20
console.log("Task 20");
console.log("Task 21");
sum =0;
let n= 3;
for(i=1;i<=n;i++){
    sum += i*i;
}
console.log(sum);

//21
let exceed = 31;
sum =0;
i=1;
while(sum<=exceed){
    sum+=i;
    i++;
}
console.log(sum);
//22
console.log("Task 22");
//    *
//   ***
//  *****         
//   *** 
//    *
n=11;
n = n%2===0 ? n+1:n;
let mid = Math.floor(n/2);
let base = [];
for(i=0;i<n;i++){
    base.push(" ");
    if(i===mid-1) base.push("*");
}
for(i=1;i<=n;i++){
    console.log(base.join(""));
    if(i<=mid){
        base[mid +i] = "*";
        base[mid -i] = "*";
    }
    else if(i>mid){
        base[mid + (i-n)] = " ";
        base[mid - (i-n)] = " ";
    }
}

//23
console.log("Task 23");
valid = parseInt(prompt("Enter number 0-100"));
let left=0,right=100;
if(valid){
    do{
        guess = Math.floor((right+left)/2);
        console.log(guess);
        if(guess<valid) left = guess +1;
        else if(guess>valid) right = guess -1;
    } while(guess !== valid);
    console.log(`You made it! number was: ${valid}`);
}

//24
console.log("Task 24");
sum=0;
n= 5;
for(i=1;i<=n;i++){
    sum += (i%2===1) ? 1/i:-1/i;
}
console.log(sum);
//25
console.log("Task 25");
n=17;
while(n>1){
    if(n%2==0) n/=2
    else n= n*3+1;
    console.log(n);
}
