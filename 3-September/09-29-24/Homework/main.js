// 80. Use flat on the array ['a', ['b', ['c']]] with infinite depth.
const arr = ['a', ['b', ['c']]];
const res = arr.flat(Infinity);
// console.log(res);

// 81. Use a combination of filter and map to create an array of the squares of even numbers from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
const arr1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res1 = arr1.filter(element => element%2 === 0).map(element => element**2);
// console.log(res1);


// 82. Use reduce to group an array of objects by a specific property.
// For example, group [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}] by age.
const arr2 = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}];
const res2 = arr2.reduce((total,curr) => {
    if(!total.hasOwnProperty(curr.age))
        total[curr.age] = [];
    total[curr.age].push(curr);
    return total;
} , {});
// console.log(res2);

// 83. Implement a simple debounce function using setTimeout and apply it to an array of functions using forEach.
const arr3 = [
    () => console.log('Function 1'),
    () => console.log('Function 2'),
    () => console.log('Function 3')
]; //arr of functions

const myDebounce = (func, millisecond) => {
    const timeoutId = setTimeout(func,millisecond)
    // clearTimeout(timeoutId);
}
let time = 1000;
// const activateFunctions = arr3.forEach((func, idx) => myDebounce(func, time*idx));

// 84. Use map and Promise.all to fetch data from multiple URLs (you can use dummy URLs).


// 85. Implement a simple memoization function and use it with map on an array of numbers to calculate Fibonacci numbers.
const arr4 = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
const res4 = arr4.map(async (element,idx) => {
    try {
        // const response = await fetch(element);
        // return response;
    }
    catch(err) {
        console.log(`Error Fetching request No.${idx}`, err);
    }
});
// console.log(res4);


// 86. Use reduce to implement a simple version of Promise.all.

// 87. Implement a function that uses sort and reduce to find the median of an array of numbers.
const arr5 = [3, 1, 4, 1, 5, 9];
function findMedian(arr) {
    const sorted = arr.sort((a,b) => a - b);
    return sorted[Math.floor(arr.length/2) - 1];
}
// console.log(findMedian(arr5));

// 88. Use a combination of map and reduce to flatten an array of arrays while applying a transformation to each element.
const arr6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const res6 = arr6.reduce((total,subArr) => {
    subArr.map((element,idx) => total.push(element*(idx+1)));
    return total;
}, []);
// console.log(res6);


// 89. Implement a function that uses reduce to compose functions. Then use it with map on an array of numbers.
const functions1 = [
    (num) => num * 2,
    (num) => num + 5,
    (num) => num / 3
];
const numbers1 = [1, 2, 3];

const transformedNumbers = numbers1.map(element => functions1.reduce((acc, fn) => fn(acc), element));
// console.log(transformedNumbers);


