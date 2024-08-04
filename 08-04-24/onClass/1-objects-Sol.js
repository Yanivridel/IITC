let students = [
    {id: "1", name:"omer" , grade: 100},
    {id: "2", name:"gaga" , grade: 40},
    {id: "3", name:"baba" , grade: 80}
]

// Exercise 1
function getValuesFromKeys(arr, key){
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i][key])
            res.push(arr[i][key]);
    }
    return res;
}

// console.log(getValuesFromKeys(students,"name"));
// console.log(getValuesFromKeys(students,"id"));

// Exercise 2
function getPassStudent(arr, n){
    let res = [];
    for(let i=0;i<arr.length;i++)
        if(arr[i].grade > n)
            res.push(arr[i]);
    return res;
}

// console.log(getPassStudent(students,70));

// Exercise 3
let names = ["yossi","liraz","baba"];

function createPersons(strs){
    let res = [];
    for(let i=0;i<strs.length;i++)
        res.push({name:strs[i], id:i});
    return res;
}

// console.log(createPersons(names));

// Exercise 4
let employees = [
    { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
    { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
    { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
    { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
    { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
    { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

// WITHOUT REDUCE
function groupBy(employees,key){
    let res = {};
    for(let i=0;i<employees.length;i++){
        if(!res[employees[i][key]])
            res[employees[i][key]] = []; //create new (first time)
        res[employees[i][key]].push(employees[i]); //push into the relevant arr
    }
    return res
}

// WITH REDUCE
function groupByReduce(employees,property){
    return employees.reduce(function group(sorted,curr){
        let key = curr[property];
        if(!sorted[key])  //create new categories (first time)
            sorted[key] = [];
        sorted[key].push(curr); //push into the relevant arr
        return sorted;
    }, {});
}

console.log(groupByReduce(employees,"department"));
console.log(groupBy(employees,"yearsOfExp"));

