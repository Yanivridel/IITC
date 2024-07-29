
let i=0;
//1
console.log("Task 1");
for(i=1;i<=5;i++){
    console.log(i);
}
//2
console.log("Task 2");
for(i=0;i<=9;i++){
    console.log(i);
}
//3
console.log("Task 3");
for(i=10;i>=1;i--){
    console.log(i);
}
//4
console.log("Task 4");
for(i=2;i<=10;i+=2){
    console.log(i);
}
//5
console.log("Task 5");
for(i=1;i<=10;i+=2){
    console.log(i);
}
//6
console.log("Task 6");
for(i=0;i<=15;i+=3){
    console.log(i);
}
//7
console.log("Task 7");
for(i=1;i<=20;i+=2){
    console.log(i);
}
//8
console.log("Task 8");
for(i=2;i<=20;i+=2){
    console.log(i);
}
//9
console.log("Task 9");
for(i=10;i>=0;i-=2){
    console.log(i);
}
//10
console.log("Task 10");
for(i=5;i<=25;i+=5){
    console.log(i);
}
//11
console.log("Task 11");
for(i=0;i<5;i+=1){
    console.log("*");
}
//12
console.log("Task 12");
for(i=0;i<3;i+=1){
    console.log("Hello\n");
}
//13
console.log("Task 13");
for(i=1;i<=3;i+=1){
    console.log(`${i}!`);
}
//14
console.log("Task 14");
for(i=65;i<=69;i+=1){
    console.log(String.fromCharCode(i));
}
//15
console.log("Task 15");
let res = "";
for (let i = 0; i < 4; i++) {
  res += "2";
  if (i < 3) {
    res += " ";
  }
}
console.log(res);
//16
console.log("Task 16");
let arr = [1, 2, 3, 4, 5];
for(i=0;i<arr.length;i+=1){
    console.log(arr[i]);
}
//17
console.log("Task 17");
arr = ['a', 'b', 'c', 'd'];
for(i=0;i<arr.length;i+=1){
    console.log(arr[i]);
}
//188
console.log("Task 18");
arr = [10, 20, 30, 40, 50];
for(i=arr.length-1;i>=0;i-=1){
    console.log(arr[i]);
}
//19
console.log("Task 19");
arr = [1, 2, 3, 4, 5, 6];
for(i=0;i<arr.length;i+=2){
    console.log(arr[i]);
}
//20
console.log("Task 20");
let colors = ['red', 'green', 'blue'];
for(i=0;i<colors.length;i+=1){
    console.log(`Color:${colors[i]}`);
}

//21
console.log("Task 21");
let sum = 0;
for(i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);
//22
console.log("Task 22");
let product = 1;
for(i=1;i<=5;i++){
    product*=i;
}
console.log(product);
//23
console.log("Task 23");
arr = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0) count++;
}
console.log(count);
//24
console.log("Task 24");
arr = [10, 5, 8, 12, 3];
let largest = arr[0];
for(i=0;i<arr.length;i++){
    if(largest<arr[i]) largest=arr[i];
}
console.log(largest);
//25
console.log("Task 25");
sum = 0;
for(i=1;i<=10;i++){
    if(i%2==0) sum+=i;
}
console.log(sum);
//26
console.log("Task 26");
for(i=1;i<=3;i++){
    console.log("*".repeat(i));
}
//27
let j;
console.log("Task 27");
for(i=1;i<=3;i++){
    for(j=1;j<=3;j++){
        console.log("*");
    }
}
//28
console.log("Task 28");
let str = "";
for(i=1;i<=3;i++){
    str+=i.toString()
    console.log(str);
}
//29
let row;
console.log("Task 29");
for (i = 1; i <= 4; i++) {
    row = "";
    for (j = 1; j <= 4; j++) {
      row += (i * j) + "\t";
    }
    console.log(row);
  }
//30
console.log("Task 30");
for(i=1;i<=3;i++){
    console.log(i.toString().repeat(i));
}
