"use strict";


const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];

const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};
// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
  student.age = newAge
}

updateAge(student_1, 18);
// console.log("Updated Student:", student_1);

const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};
// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
  product.categories.push(category);
}

addCategory(product_1, "gadgets");
// console.log("Updated Product:", product_1);


// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
  return product.isAvailable;
}

const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable);


// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
  for(let i=0;i<products.length;i++){
    if(products[i].name === productName) return products[i]
  }
  return null;
}

const foundProduct = findProductByName(myProducts, "Phone");
// console.log("Found Product:", foundProduct);


// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
  let count = 0;
  for(let i=0;i<products.length;i++){
    if(products[i].categories.includes(category)) count++;
  }
  return count;
}

const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// 🙂 Task 6: Get Student Ages 🙂
// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
  const res = [];
  for(let i=0;i<students.length;i++){
    if(students[i].age) // if property value exists
      res.push(students[i].age)
  }
  return res;
}

const ages = getStudentAges(students);
// console.log("Student Ages:", ages);



// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
  const res = [];
  for(let i=0;i<products.length;i++){
    if(products[i].categories.includes(category))
      res.push(products[i]);
  }
  return res;
}

const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);


// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
  if(!products) return 0;  //empty object
  let sum=0;
  for(let i=0;i<products.length;i++){
    if(products[i].price) // if property value exists
      sum+=products[i].price;
  }
  return sum/products.length;
}

const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);


// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
}

addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1);

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
  let count = 0;
  for(let i=0;i<strings.length;i++){
    for(let j=0;j<strings[i].length;j++){
      if(strings[i][j] === char) count+=1;
    }
  }
  return count;
}

const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count);
// console.log("Occurrences of 'c':", c_count);


// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
  let product = findProductByName(products,productName)
  if(product) product.price = newPrice; //If not null, update.
}

updatePriceByName(myProducts, "Phone", 550);
// console.log("Updated Products:", myProducts);

// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
  for(let i=0; i<strings.length;i++){
    strings[i] = strings[i].toUpperCase();
  }
  return strings;
}

// const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);


// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.

function groupStringsBySpaces(strings) {
  const countSpaces = {};
  for(let i=0;i<strings.length;i++){
    const currStr = strings[i].split(" ");
    const len = currStr.length-1           //calc num of spaces
    if(!countSpaces[len])                  //If not exists yet
      countSpaces[len] = [];               //create first time
    countSpaces[len].push(currStr.join(" "));
  }
  return countSpaces;
}

const groupedStrings_1 = groupStringsBySpaces(strings);
console.log("Grouped Strings By Spaces:", groupedStrings_1);


// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.


function groupStringsByLength(strings) {
  const countSpaces = {};
  for(let i=0;i<strings.length;i++){
    const len = strings[i].length;    //calc num of spaces
    if(!countSpaces[len])             //If not exists yet
      countSpaces[len] = [];          //create first time
    countSpaces[len].push(strings[i]);
  }
  return countSpaces;
}

const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings_2);


// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
function capitalizeStrings(strings) {
  const res = [];
  for(let i=0;i<strings.length;i++){
    const strArr = strings[i].split(" ");
    for(let j=0;j<strArr.length;j++){
      strArr[j] = strArr[j][0].toUpperCase() + strArr[j].slice(1);
    }
    res.push(strArr.join(" "));
  }
  return res;
}

const capitalizedStrings = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings);