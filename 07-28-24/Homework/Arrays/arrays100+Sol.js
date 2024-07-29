
let i=0;
//1
let fruits=[];
//2
let numbers =[1,2,3,4,5];
//3
let colors = ["red", "green", "blue"];
//4
let mixed = [7,"43",true,6.24];
//5
let seasons = ["Spring","Summer","Autumn","Winter"];
//6
console.log("Task 6");
console.log(numbers.length);
//7
console.log("Task 7");
function emptyCheck(arr) { return arr.length===0;}
console.log(emptyCheck(fruits));
//8
console.log("Task 8");
let dynamic = [3,5,9,11,2];
console.log(dynamic.length);
//9
console.log("Task 9");
dynamic.push(15);
console.log(dynamic.length);
//10
console.log("Task 10");
dynamic.pop();
console.log(dynamic.length);
//11
console.log("Task 11");
console.log(colors[0]);
//12
console.log("Task 12");
console.log(seasons[seasons.length-1]);
//13
console.log("Task 13");
console.log(numbers[Math.floor(numbers.length/2)]);
//14
console.log("Task 14");
console.log(fruits[15]);
//15
console.log("Task 15");
console.log(`The second color is ${colors[1]}`);
//16
fruits[0] = "Apple";
//17
numbers[numbers.length-1] = 10;
//1
numbers[2] *=2;
//19
console.log("Task 19");
for(i=0;i<colors.length;i++){
    colors[i] = colors[i].toUpperCase()
}
console.log(colors.toString());
//20
console.log("Task 20");
let temp = seasons[0];
seasons[0] = seasons[seasons.length-1];
seasons[seasons.length-1] = temp;
console.log(seasons.toString());
//21
console.log("Task 21");
console.log(fruits.toString());
fruits.push("Orange");
console.log(fruits.toString());
//22
console.log("Task 22");
console.log(numbers.toString());
numbers.pop();
console.log(numbers.toString());
//23
console.log("Task 23");
console.log(colors.toString());
colors.push("Yellow","Pink","Purple");
console.log(colors.toString());
//24
console.log("Task 24");
let empty = []
for(i=1;i<=5;i++){
    empty.push(i);
}
console.log(empty.toString());
//25
console.log("Task 25");
while(empty.length>0){
    console.log(empty.pop());
}
console.log(empty.toString());
//26
console.log("Task 26");
console.log(fruits.toString());
fruits.unshift("Mango");
console.log(fruits.toString());
//27
console.log("Task 27");
console.log(numbers.toString());
numbers.shift();
console.log(numbers.toString());
//28
console.log("Task 28");
console.log(numbers.toString());
numbers.unshift(1,7,9);
console.log(numbers.toString());
//29
console.log("Task 29");
empty = []
for(i=1;i<=5;i++){
    empty.unshift(i);
}
console.log(empty.toString());
//30
console.log("Task 30");
for(i=1;i<=5;i++){
    console.log(empty.shift());
}
console.log(empty.toString());
//31
console.log("Task 31");
console.log(colors.indexOf("GREEN"));
//32
console.log("Task 32");
console.log(seasons.indexOf("winter")!==-1); 
//33
console.log("Task 33");
console.log(colors.toString());
colors.push("red");
console.log(colors.toString());
console.log(colors.lastIndexOf("red"));
//34
console.log("Task 34");
let colorsDup =[]
for(i=0;i<colors.length;i++){
    colorsDup.push(colors[i],colors[i]);
}
console.log(colorsDup.toString());
console.log(`first green: ${colorsDup.indexOf("GREEN")}
last green: ${colorsDup.lastIndexOf("GREEN")}`);
//35
console.log("Task 35");
console.log(`Does numbers have 7? answer: ${numbers.indexOf(7)!==-1}`);
//36
console.log("Task 36");
console.log(fruits.includes("Apple"));
//37
console.log("Task 37");
console.log(numbers.includes(10));
//38
console.log("Task 38");
console.log(colors.toString());
console.log(colors.includes("BLUE",Math.floor(colors.length/2)));
//39
console.log("Task 39");
function includeArr(arr,val){
    return arr.includes(val);
}
//40
console.log("Task 40");
console.log("Searching Mango in fruits:");
console.log(includeArr(fruits,"Mango") ? "Found it!":"Where is it?");
//41
console.log("Task 41");
console.log(numbers.toString());
console.log(numbers.slice(3).toString());
//42
console.log("Task 42");
console.log(colors.toString());
console.log(colors.slice(-2).toString());
//43
console.log("Task 43");
console.log(seasons.toString());
console.log(seasons.slice(1,3).toString());
//44
console.log("Task 44");
let copyNumbers = numbers.slice();
console.log(numbers.toString());
console.log(copyNumbers.toString());
//45
console.log("Task 45");
let idx = Math.floor(numbers.length/2);
console.log(numbers.toString());
console.log(numbers.slice(idx,idx+1).toString());
//46
console.log("Task 46");
idx = Math.floor(fruits.length/2);
console.log(fruits.toString());
fruits.splice(idx,2).toString()
console.log(fruits.toString());
// array.splice(index, count, item1, ....., itemX)

//47
console.log("Task 47");
console.log(numbers.toString());
numbers.splice(0,1,37)
console.log(numbers.toString());

//48
console.log("Task 48");
console.log(colors.toString());
colors.splice(2,0,"Magenta","Gray")
console.log(colors.toString());
//49
console.log("Task 49");
console.log(colors.toString());
colors.splice(0,1,"DarkBlue","Gold")
console.log(colors.toString());
//50
console.log("Task 50");
empty.push(1,2,3,4,5);
console.log(empty.toString());
empty.splice(0,empty.length)
console.log(empty.toString());
//51
console.log("Task 51");
let con = fruits.concat(colors);
console.log(con.toString());
//52
console.log("Task 52");
con = fruits.concat(numbers).concat(colors);
console.log(con.toString());
//53
console.log("Task 53");
console.log(numbers.toString());
console.log(numbers.concat([1,2,5]).toString());
//54
console.log("Task 54");
console.log(numbers.concat(numbers).toString());

//55
console.log("Task 55");
console.log(colors.toString());
console.log(colors.concat("White","Black").toString());
//56
console.log("Task 56");
fruits = fruits.concat("Banana","Apple","Orange")
console.log(fruits.join(","));
//57
console.log("Task 57");
console.log(fruits.join("-"));
//58
function arrSep(arr,sym) {return arr.join(sym);}
//59
console.log("Task 59");
console.log(arrSep(fruits,""));
//60
console.log("Task 60");
let rev = "fruits are so great for vitamin C".split(" ").reverse();
console.log(rev.join(" ").toString());
//61
console.log("Task 61");
console.log(seasons.reverse().toString());
//62
console.log("Task 62");
function isPalindrome(word){
    let temp = word.split("");
    temp = temp.reverse().join("")
    return temp===word;
}
console.log(isPalindrome("BaBaBaBabaBaBaBaB"));
//63
console.log("Task 63");
console.log(numbers.toString());
console.log(numbers.reverse().map(Math.sqrt).toString());
//64
console.log("Task 64");
let str = "Hello";
str= str.split("").reverse().join("");
console.log(str);
//65
console.log("Task 65");
function myReverse(arr){
    let i=0,j=arr.length-1;
    while(i<j){
        let temp = arr[i];
        arr[i++]=arr[j];
        arr[j--]=temp;
    }
    return arr;
}
console.log(numbers.toString());
console.log(myReverse(numbers).toString());
//66
console.log("Task 66");
console.log(fruits.sort().toString());
//67
console.log("Task 67");
console.log(numbers.toString());
console.log(numbers.sort(function(a, b){return a - b}).toString());
//68
console.log("Task 68");
console.log(numbers.sort(function(a, b){return b-a}).toString());
//69
console.log("Task 69");
let words = ["Hello", "Im", "Yaniv", "And", "I", "Like", "Chocolate"];
console.log(words.sort(function(a,b){return a.length-b.length}).toString())
//70
console.log("Task 70");
console.log(numbers.sort(function(a,b){return a%3-b%3}).toString());

//71
console.log("Task 71");
fruits.forEach(function(val,idx){ console.log(`${idx}. ${val}\n`);})
//72
console.log("Task 72");
console.log(numbers.toString());
numbers.forEach(function(val,idx){ numbers[idx]*=2});
console.log(numbers.toString());
//73
console.log("Task 73");
console.log(words.toString());
let htmlList = "<ul>";
words.forEach(function(val){ htmlList += `\n<li>${val}</li>`});
console.log(htmlList.toString());
//74
console.log("Task 74");
let res = [];
fruits.forEach(function(val){ if(val.includes("ang")) res.push(val)});
console.log(fruits.toString());
console.log(`result: ${res}`);

//75
console.log("Task 75");
let count = 0;
fruits.forEach(function(val){ if(val.includes("ang")) count++});
console.log(`result: ${count}`);
//76
console.log("Task 76");
res = [];
fruits.map(function(val){ res.push(val.length); });
console.log(`result: ${res}`);

//77
console.log("Task 77");
numbers.map(function(val,idx){ numbers[idx]*=val; });
console.log(`result: ${numbers}`);
//78
console.log("Task 78");
res = []
console.log(`${numbers}`);
numbers.map(function(val){ res.push(val%2===0? true:false) });
console.log(`result: ${res}`);
//79
console.log("Task 79");
let names = ["Yaniv","Liav","Ben","Josef"];
names.map(function(val,idx){ names[idx] = `Welcome ${val}\n`;})
console.log(names.toString());
//80
console.log("Task 80");
let celsius  = [20,30,10,23,51,2];
console.log(celsius.toString());
celsius.map(function(val,idx){ celsius[idx] = val*9/5 + 32});
console.log(celsius.toString());
//81
console.log("Task 81");
console.log(numbers.filter(function(a){return a%2==0}).toString());
//82
console.log("Task 82");
console.log(fruits.filter(function(a){return a.length>=5}).toString());
//83
console.log("Task 83");
function removeDuplicated(arr){
    arr = arr.filter(function(val){ return arr.indexOf(val)===arr.lastIndexOf(val)});
    return arr;
}
numbers.push(2,6,8,5,3,5,7,3,2,2,7);
console.log(numbers.toString());
console.log(removeDuplicated(numbers).toString());
//84
console.log("Task 84");
console.log([1,2,0,"0",null,"Hi",undefined,""].filter(function(a){ return a;}));
//85
console.log("Task 85");
let subStr = "e";
console.log(words.toString());
console.log(words.filter(function(a){ return a.includes(subStr)}).toString());
//86
console.log("Task 86");
console.log(numbers.find(function(a){return a>3}).toString());
//87
console.log("Task 87");
console.log(fruits.find(function(a){return a.startsWith("B")}).toString());
//88
console.log("Task 88");
function isPrime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i===0) return false;
    }
    return true;
}
console.log(numbers.toString());
console.log(numbers.find(isPrime).toString());
//89
console.log("Task 89");
console.log(seasons.findIndex(function(a){ return a==="Winter"}).toString());
//90
console.log("Task 90");
console.log(seasons.findIndex(function(a){ return a.endsWith("r")}).toString());
//91
console.log("Task 91");
console.log(numbers.some(function(a){ return a%2===0}));
//92
console.log("Task 92");
console.log(fruits.every(function(a){ return a.length>3}));
//93
console.log("Task 93");
console.log(numbers.some(function(a){ return a<0}));
//94
console.log("Task 94");
//numbers = removeDuplicated(numbers)
console.log(numbers.toString());
console.log(numbers.every(function(a){ return numbers.indexOf(a)===numbers.lastIndexOf(a)}));
//95
console.log("Task 95");
console.log(numbers.every(function(a){ return a>=0}) &&
            numbers.some(isPrime));
//96
console.log("Task 96");
console.log(numbers.toString());
console.log(numbers.reduce(function(total,a){ return total+a;}));
//97
console.log("Task 97");
console.log(fruits.reduce(function(longest,curr){
     return curr.length>longest.length ? curr:longest;}));
//98
console.log("Task 98");
console.log(numbers.toString());
console.log(numbers.reduce(function(obj,n){
     if(n in obj) obj[n]+=1
     else obj[n] = 1;
    return obj}, {} ));
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Our initialValue was empty obj {}

//99
console.log("Task 99");
let nestedArr = [1, [2, 5], [4 , 3], [6, 7], 8, [9, 10]];
console.log((nestedArr.reduce(function flatten(total,arr){
    return total.concat(arr)} , [])).toString());

//100
console.log("Task 100");
//Array of Object:
let data = [
    { category: 'fruit', name: 'apple' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'broccoli' },
    { category: 'fruit', name: 'cherry' },
    { category: 'vegetable', name: 'spinach' }
];
let property = "category";
console.log(data.reduce(function groupBy(sorted,curr){
    let key = curr[property];
    if(!sorted[key])  //create new categories (first time)
        sorted[key] = [];
    sorted[key].push(curr); //push into the relevant arr
    return sorted;
}, {}));

//101
console.log("Task 101");
console.log(removeDuplicated(numbers).toString());
//102
console.log("Task 102");
let shift = 3;
numbers = [1,2,3,4,5,6];
function rotate(arr,shift){
    shift%=arr.length  // avoid waist of full rotates
    if(shift===0) return arr;
    // 1,2,3|,4  --> 4,1,2,3   s=1
    // 1,2|,3,4  --> 3,4,1,2   s=2
    // 1|,2,3,4  --> 2,3,4,1   s=3
    let tempEnd = arr.slice(-shift)
    let tempStart = arr.slice(0,arr.length-shift)
    // console.log(tempEnd,tempStart);
    for(i=0;i<tempStart.length;i++)
        tempEnd.push(tempStart[i])
    return tempEnd;
}
console.log(numbers.toString());
console.log(rotate(numbers,3).toString());
//103
console.log("Task 103");
function simpleMap(arr,func){
    return arr.reduce(function myMap(total,val){
        total.push(func(val));
        return total;
    }, []);
}
console.log(numbers.toString());
console.log(simpleMap(numbers,Math.sqrt).toString());
//104
console.log("Task 104");
function intersectionArr(arr1,arr2){
    return arr1.filter(function inOtherArr(val){
        return arr2.includes(val)
    })
}
console.log(intersectionArr([1,2,3,4],[3,4,5,6]));
//105
console.log("Task 105");
function getRandom(min,max){
    return random = Math.floor(Math.random() * (max-min+1) + min);
}
function randomArr(n){
    return Array.from(new Array(n),function() { return getRandom(1,10)});
}
console.log(randomArr(10).toString());
