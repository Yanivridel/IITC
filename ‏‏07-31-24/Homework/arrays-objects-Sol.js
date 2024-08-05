//1
let library = {
    drama: ["Harry Potter"],
    fantasy: [],

    //2
    addBook: function(title,key){
        library[key.toLowerCase()].push(title);
    },
    numberInCategory: function(key){
        return this[key.toLowerCase()].length;
    }
}

//2
library.addBook("TomorrowLand","Fantasy");
console.log(library);

//3
console.log(library.numberInCategory("drama"));

//4
let school = {
    math: ["Aarhon","Liav","Amit"],
    english: ["baba","dada","mama"],

    //5
    addStudent: function(name,key="math"){
        this[key.toLowerCase()].push(name);
    },
    //6
    printSubject: function(sub="math"){
        for(let i=0;i<school[sub].length;i++){
            console.log(school[sub][i]);
            
        }
    }
}

//5
console.log(school.addStudent("mimi"));
console.log(school);
//6
school.printSubject("english");




