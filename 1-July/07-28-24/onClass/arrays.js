
/* METHODS
let arr =[1,"2",3,4,5,"6",7,8,9];
arr.push(10); // add at the end
arr.unshift(0); // add at the beginning
console.log(arr);

arr.pop(); // delete from the end
arr.shift() // delete from beginning
console.log(arr);

let idx = arr.indexOf("6");
console.log(idx);

let slicedArr = arr.slice(1,3); // subArray (not change arr)
console.log(slicedArr);
*/

let food = ["pasta","pizza","hamburger","ice-cream","steak"];
console.log(food[2]);
food[2]="kiwi";
food.shift();
for(let i=0;i<food.length;i++){
    console.log(food[i]);
}
console.log(`The index of steak is: ${food.indexOf("steak")}`);
let numbers =[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum+= numbers[i];
}
console.log(sum);
