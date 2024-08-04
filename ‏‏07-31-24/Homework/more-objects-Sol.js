
//11
console.log("Task 11");
let playlist = {
    name:"Sad",
    songs: ["xxxx","yyyy","zzzz"],
    duration:9
}
playlist.songs.push("Love");
playlist.duration+=3;
console.log(`Average song duration: ${playlist.songs.length * 3 / playlist.songs.length}`);
//12
console.log("Task 12");
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
console.log("Task 13");
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
console.log("Task 15");
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
console.log("Task 16");
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
console.log("Task 17");
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
console.log("Task 18");
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
console.log("Task 19");
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
console.log("Task 20");
let quiz = {
    questions: [
        {text:"baba",
         options: ["a.Hello World","b.World Hello","c.Wow","d.What"],
         correctAnswer: 1
        },
        {text:"mama",
         options: ["a.Hello World","b.World Hello","c.Wow","d.What"],
         correctAnswer: 2
        },
        {text:"papa",
         options: ["a.Hello World","b.World Hello","c.Wow","d.What"],
         correctAnswer: 3
        }
    ],
    score: 78,
    askQuestion: function(index){
        console.log(this.questions[index].text + "\n" + this.questions[index].options.join("\n"));
    },
    checkAnswer: function(index,answer){
        return this.questions[index].correctAnswer === answer;
    }
    
}

quiz.askQuestion(2);
console.log(quiz.checkAnswer(2,3));

//21
console.log("Task 21");
let inventory = {
    items: [
        {
            name:"Sword",
            quantity: 1
        },
        {
            name:"Apple",
            quantity: 5
        },
        {
            name:"Shield",
            quantity: 1
        }
    ],
    checkStock: function(_name){
        let idx = this.findIdx(_name);
        if(idx !== -1)
            console.log(`Name: ${this.items[idx].name}\nQuantity: ${this.items[idx].quantity}`);
        else
            console.log("Not Exists");
    },
    addItem: function(_name,_quantity){
        let idx = this.findIdx(_name);
        if(idx !== -1)
            this.items[idx].quantity += _quantity;
        else this.items.push({name:_name ,quantity:_quantity});
    },
    removeItem: function(_name,_quantity){
        let idx = this.findIdx(_name);
        if(idx !== -1){
            this.items.splice(idx,1);
        }
    },
    findIdx: function(name){
        let idx = -1;
        let len = this.items.length;
        for(let i=0; i< len; i++){
            if(this.items[i].name === name) {
                idx = i;
                break;
            }
        }
        return idx;
    }

}
inventory.addItem("Stick",5);
inventory.addItem("Sword",3);
inventory.checkStock("Sword");
inventory.checkStock("Apple");
inventory.checkStock("Shield");
inventory.checkStock("Stick");
inventory.removeItem("Apple")
inventory.checkStock("Apple");

//22
console.log("Task 22");
let dice = {
    sides: 4,
    lastRoll: 2,
    roll: function(){
        this.lastRoll = getRandom(1,this.sides);
        return this.lastRoll;
    }
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

dice.roll()
console.log(dice.lastRoll);

//23
console.log("Task 23");
let wordCounter = {
    text: "Hello I am Yaniv and I am a developer",
    countWords: function(){
        let count = 1;
        let temp = this.text.trim();
        for(let i=0;i<temp.length;i++){
            if(temp[i]=== " " && temp[i-1]!== " ") count++;
        }
        return count;
    },
    countCharacters: function(includeSpaces){
        let count = 0;
        for(let i=0;i<this.text.length;i++){
            if(this.text[i]===" ") count+= includeSpaces? 1:0;
            else count++;
        }
        return count;
    },
    getFrequentWords: function(n){
        let freq = {};
        let temp = this.text.trim(), i=0;
        while(true){
            if(temp[i] === " ") {i++; continue;}
            let word = getNextWord(temp.slice(i))
            if(word.length === 0) break;
            if(!freq[word]) freq[word] = 1;
            else freq[word]++;
            i += word.length;
        }
        console.log(freq);  //result freq all
        let done = [], sol = {};
        let values = Object.values(freq);
        let keys = Object.keys(freq);
        for(let i=0;i<n;i++){
            let max = Math.max( ...values);
            for(let j=0;i<keys.length;j++){
                if(freq[keys[j]]===max && !done.includes(keys[j])){
                    done.push(keys[j]);
                    sol[keys[j]] = freq[keys[j]];
                    values.splice(values.indexOf(max),1);
                    break;
                }
            }
        }
        return sol;
    }
};
function getNextWord(str){
    let i=0, word = "";
    while(str[i] !== ' ' && str[i] !== undefined) word+=str[i++];
    return word;
}
let n = 3;
console.log(wordCounter.countWords());
console.log(wordCounter.countCharacters(true));
console.log(wordCounter.countCharacters(false));
console.log("n most freq:");
console.log(wordCounter.getFrequentWords(n));

//24
console.log("Task 24");
let calculator ={
    result: 0,
    add: function(n){  this.result += n; return this},
    subtract: function(n){ this.result -= n; return this},
    multiply: function(n){ this.result *= n; return this},
    divide: function(n){ this.result /= n; return this},
    clear: function(){ this.result = 0}
}
console.log(calculator.add(5).multiply(5).subtract(1).divide(3).result); 
// ((((0+5)*5)-1)/3) = (25-1)/3 = 24/3 = 8

//25
console.log("Task 25");
let game = {
    playerScore: 0,
    computerScore: 5,
    play: function(playerChoice){this.playerScore = playerChoice;},
    getComputerScore: function(){ this.computerScore = getRandom(1,10)},
    determineWinner: function(player,computer) {
        console.log("Winner is:");
        console.log(this.playerScore>=this.computerScore? player:computer);
    }
}
game.play(5)
game.getComputerScore();
game.determineWinner("Yaniv","comp")

//26
console.log("Task 26");
// Already done BMI task.

//27
console.log("Task 27");
let timeConverter = {
    seconds: 15,
    setTime: function(seconds){this.seconds = seconds;},
    getSeconds: function(){
        return ((this.seconds % 3600) %60);
    },
    getMinutes: function(){
        return Math.floor((this.seconds % 3600) /60);
    },
    getHours: function(){
        return Math.floor(this.seconds / 3600);
    }
};

timeConverter.setTime(4000);
console.log(`${timeConverter.getHours()}:${timeConverter.getMinutes()}:${timeConverter.getSeconds()}`);


//28
console.log("Task 28");
let shoppingCart = {
    items: [
        {name: "chocolate", price: 10, quantity: 1},
        {name: "pillow", price: 30, quantity: 2}
    ],
    total: 2,
    addItem: function(name,price,quantity){
        this.items.push({name:name,price:price,quantity:quantity});
    },
    removeItem: function(name){
        let i;
        for(i=0;i<this.items.length;i++)
            if(this.items[i].name === name) break;
        this.items.splice(i,1);
    },
    calculateTotal: function(){
        return this.items.reduce( function(total,curr){
            return total+ curr.price;
        },0)
    }
}

shoppingCart.addItem("steak",100,3);
shoppingCart.removeItem("pillow")
console.log("Total price: " + shoppingCart.calculateTotal());
console.log(shoppingCart);

//29
console.log("Task 29");
let morseTranslator = {
    alphabet: { 
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    },  
    textToMorse: function(text){
    let res = text.toLowerCase().split(" ");    
    for(let i=0;i<res.length;i++){
        res[i] = res[i].split("");
        for(let j=0;j<res[i].length;j++){
            let keys = Object.keys(this.alphabet);
            for(let k=0; k < keys.length;k++){
                if(res[i][j] === this.alphabet[keys[k]]){
                    res[i][j] = keys[k];
                    break;
                }
            }
        }
        res[i] = res[i].join(" ");
    }
    res = res.join("/");
    return res;
    },
    morseToText: function(text){
    let res = text.split("/");
    for(let i=0;i<res.length;i++){
        res[i] = res[i].split(" ");
        for(let j=0;j<res[i].length;j++){
            let keys = Object.keys(this.alphabet);
            for(let k=0; k < keys.length;k++){
                if(res[i][j] === keys[k]){
                    res[i][j] = this.alphabet[keys[k]];
                    break;
                }
            }
        }
        res[i] = res[i].join("");
    }
    res = res.join(" ");
    return res;
    }
    
};

console.log(morseTranslator.textToMorse("Hello how are you"));
// console.log(morseTranslator.morseToText(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")); // HELLO WORLD
// console.log(morseTranslator.morseToText(".. / .-.. --- ...- . / -.-- --- ..- ")); // i love you



//30
console.log("Task 30");
let stopwatch = {
    startTime: 0,
    isRunning: false,
    elapsedTime:0,
    start: function(){
        this.isRunning = true;
        this.startTime = new Date().getTime() / 1000;
    },
    stop: function(){
        this.isRunning = false;
        let seconds = new Date().getTime() / 1000;
        this.elapsedTime = seconds - this.startTime;
    },
    reset: function(){
        this.startTime = 0;
        this.isRunning = false;
        this.elapsedTime = 0;
    },
    getElapsedTime: function(){
        return this.elapsedTime;
    }
}

stopwatch.start();
setTimeout(() => {
    console.log("3 seconds have passed.");
    stopwatch.stop();
    console.log(stopwatch.getElapsedTime());
  }, 3000);



