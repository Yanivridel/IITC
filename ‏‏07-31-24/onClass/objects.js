
// let city = "Ness-Ziona";
// let person = {
//     firstName: "Yaniv",
//     lastName: "Ridel",
//     age: "23",
//     city,
//     job: "Student",
//     favAnimal: "Dog",
//     favColor: "cyan",
//     phoneType: "Xiaomi",
//     arr: [100,200,560,230,187],
//     emptyObj: {},
// }

// let currAge = "age";
// console.log(person.firstName, person.city, person[currAge], person["job"]);

// person.favColor = "Black";
// console.log(person.favColor);

// person.newLine = "newLine\n";
// console.log(person.newLine);

//1
console.log("Exercise 1");
let person1 = {
    name: "Yaniv",
    age: "23",
    isStudent: false
}
console.log(person1.name, person1.age);
person1.isStudent= true;
console.log(person1.isStudent);

//2
console.log("Exercise 2");
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2017
}
console.log(car.make, car["model"]);
car.year += 1;
console.log(car.year);

//3
console.log("Exercise 3");
let fruit = {
    name:"Banana",
    color:"Yellow",
    sweetness:8
}
console.log(fruit["color"],fruit.name);
fruit.color = "Gold";
console.log(fruit.color);

//4
console.log("Exercise 4");

let book1 = {
    title:"Harry Potter",
    author:"J.K Rolling",
    pages:300
}
console.log(`Title: ${book1["title"]} Author: ${book1.author}`);
book1.pages += 50;
console.log(`Number of Pages: ${book1.pages}`);

let book2 = {
    title:"5 Ballon",
    author:"Fitous",
    pages:258
}
console.log(`Title: ${book2["title"]} Author: ${book2.author}`);
console.log(`Number of Pages: ${book2.pages}`);

//5
console.log("Exercise 5");
let animal = {
    species:"Wolf",
    sound:"Howl",
    isWild: true
}
console.log(`Species: ${animal["species"]} Sound: ${animal.sound}`);
console.log(`Wild?: ${animal.isWild ? "Yes":"No"}`);