
//11
let playlist = {
    name:"Sad",
    songs: ["xxxx","yyyy","zzzz"],
    duration:9
}
playlist.songs.push("Love");
playlist.duration+=3;
console.log(`Average song duration: ${playlist.songs.length * 3 / playlist.songs.length}`);
//12
let bankAccount = {
    accNum:"1148054323",
    balance: 5000,
    isActive: true,
    deposit: function(amount){
        this.balance+=amount;
    },
    withdraw: function(amount){
        if(this.balance>amount) this.balance-=amount;
    }
}
bankAccount.deposit(123);
console.log(bankAccount.balance);
bankAccount.withdraw(2346);
console.log(bankAccount.balance);
//13
let circle = {
    radius:3,
    color: "Blue",
    isActive: true,
    calculateArea: function(){
        return Math.pow(this.radius,2)*Math.PI;
    },
    calculateCircumference: function(){
        return this.radius*Math.PI*2;
    }
}
console.log(circle.calculateArea().toFixed(3),
             circle.calculateCircumference().toFixed(3));
//14
console.log("Task 14");
let student = {
    name: "Yaniv",
    grades: [0,33,50,66,100],
    calculateAverage: function(){
        return this.grades.reduce(function(total,curr) { return total+=curr})/this.grades.length;
    },
    getLetterGrade: function(){
        let avg = this.calculateAverage();
        if(avg >= 90) return "A";
        else if(avg >= 80) return "B";
        else if(avg >= 70) return "C";
        else if(avg >= 60) return "D";
        else return "F";
    }
}
console.log(student.calculateAverage());
console.log(student.getLetterGrade());
//15
let todoList = {
    tasks: ["x","y","z","w"],
    completedTasks: [],
    displayTasks: function(){
        console.log(`Uncompleted: ${this.tasks}\nCompleted: ${this.completedTasks}`);
    },
    addTask: function(task){
        this.tasks.push(task);
    },
    completeTask: function(task){
        let idx = this.tasks.indexOf(task);
        if(idx !== -1) this.completedTasks.push(this.tasks.splice(idx,1));
    }
}
todoList.addTask("t");
todoList.displayTasks();
todoList.completeTask("x");
todoList.displayTasks();
todoList.completeTask("f");
todoList.displayTasks();
todoList.completeTask("w");
todoList.displayTasks();
//16
let book = {
    author: "J.K",
    isbn: "1192-457-311",
    isAvailable: true,
    checkOut: function(){
        this.isAvailable = !this.isAvailable;
    },
    return: function() { return this.isAvailable;} 
}
console.log(book.return());
book.checkOut();
console.log(book.return());

//17
let colorMixer = {
    color1: "red",
    color2: "white",
    mix: function(){
        let comb = this.color1.toLowerCase() + this.color2.toLowerCase();
        switch(comb){
            case "blueyellow": case "yellowblue":
                return "green";
            case "redblue": case "bluered":
                return "purple";
            case "redwhite": case "whitered":
                return "pink";    
            default:
                return "Not Exists";
        }
    }
};
console.log(colorMixer.mix());
//18
let tempConverter = {
    celsius: 25,
    fahrenheit: 58,
    setC: function(temp){
        this.celsius = (temp-32)*5/9;
    },
    getC: function(){
        return this.celsius;
    },
    setF: function(temp){
        this.fahrenheit = temp*9/5 + 32;
    },
    getF: function(){
        return this.fahrenheit;
    }
}
tempConverter.setC(90);
console.log(tempConverter.getC());
tempConverter.setF(25);
console.log(tempConverter.getF());

//19
let pet = {
    name: "Pap",
    type: "Ascii",
    hunger: 8,
    happiness:3,
    feed: function(){
        if(this.hunger>0) this.hunger-=1;
    },
    play: function(){
        if(this.happiness<10) this.happiness+=1;
    },
    getStatus: function(){
        return `Name: ${this.name}\nType: ${this.type}\nHunger: ${this.hunger}\nHappiness: ${this.happiness}`
    }
}
console.log(pet.getStatus());
pet.feed(); pet.feed(); pet.feed();
pet.play();pet.play();pet.play();
console.log(pet.getStatus());

//20
let quiz = {
    questions: [{},{},{}],
    score: 78
    
}