//1
let car = {
    make: "Toyota",
    model: "3",
    year: 2014,
}

let keys = Object.keys(car);
for(let i=0;i<keys.length;i++){
    console.log(keys[i] + " : " + car[keys[i]]);
}

//2
let grades = {Alice: 90, Bob: 85, Charlie: 92};
let sum = 0, count = 0;
let keys1 = Object.keys(grades);
for(let i=0;i<keys1.length;i++){
    sum += grades[keys1[i]];
    count++;
}
let avg = sum/count;
console.log("Avg : " + avg);

//3
function toUpperObj(obj){
    let keys = Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        if(typeof(obj[keys[i]]) === "string")
            obj[keys[i]] = obj[keys[i]].toUpperCase();
    }
}
toUpperObj(car);
console.log(car);

//4
//DONE ALREADY

//5
let prices = {
    apple: 0.50,
    banana: 0.75,
    orange: 0.80
};

let keys2 = Object.keys(prices);
for(let i=0;i<keys2.length;i++){
    prices[keys2[i]] = prices[keys2[i]]* 0.9;
}
console.log(prices);

