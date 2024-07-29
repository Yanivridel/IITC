
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
/*
//52
console.log("Task 52");

//53
console.log("Task 53");

//54
console.log("Task 54");

//55
console.log("Task 55");

//56
console.log("Task 56");

//57
console.log("Task 57");

//58
console.log("Task 58");

//59
console.log("Task 59");

//60
console.log("Task 60");

//61
console.log("Task 61");

//62
console.log("Task 62");

//63
console.log("Task 63");

//64
console.log("Task 64");

//65
console.log("Task 65");

//66
console.log("Task 66");

//67
console.log("Task 67");

//68
console.log("Task 68");

//69
console.log("Task 69");

//70
console.log("Task 70");

//71
console.log("Task 71");

//72
console.log("Task 72");

//73
console.log("Task 73");

//74
console.log("Task 74");

//75
console.log("Task 75");

//76
console.log("Task 76");

//77
console.log("Task 77");

//78
console.log("Task 78");

//79
console.log("Task 79");

//80
console.log("Task 80");

//81
console.log("Task 81");

//82
console.log("Task 82");

//83
console.log("Task 83");

//84
console.log("Task 84");

//85
console.log("Task 85");

//86
console.log("Task 86");

//87
console.log("Task 87");

//88
console.log("Task 88");

//89
console.log("Task 89");

//90
console.log("Task 90");

//91
console.log("Task 91");

//92
console.log("Task 92");

//93
console.log("Task 93");

//94
console.log("Task 94");

//95
console.log("Task 95");

//96
console.log("Task 96");

//97
console.log("Task 97");

//98
console.log("Task 98");

//99
console.log("Task 99");

//100
console.log("Task 100");
*/