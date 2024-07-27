
mainLoopCalc();

function mainLoopCalc(){
    let decision = false;
    do{
        operate();
        decision = confirm("Do you wanna exit?")
    }while(!decision)
    console.log("GoodBye");
}

function operate(){
    let x,y,symbol;
    do{
        x = Number(prompt("Enter number"));
    } while(isNaN(x));
    symbol = prompt("Enter operator (+,-,*,/,^,sqrt,abs");
    if(symbol!=="sqrt" && symbol!=="abs"){
        do{
            y = Number(prompt("Enter number"));
        } while(isNaN(y));
        res = Calc(x,y,symbol);
    }
    else{
        res = Calc(x,-1,symbol);
    }
    if(res!==-1) console.log(`The Answer is: ${res}`);
}

function Calc(x,y,symbol){
    switch(symbol){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
        case "^":
            return pow(x,y);
        case "sqrt":
            return sqrt(x);
        case "abs":
            return abs(x);
        default:
            console.log("Invalid operator input");
            return -1;
    }
}

// MATH FUNCTIONS
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    if(y===0) {
     console.log("Error: Cannot divide by 0");
     return -1;
    }
    return x/y;
}
function pow(x,y){
    return Math.pow(x,y);
}
function sqrt(x){
    if(x<0) return "Error: Cannot square root negative number"
    return Math.sqrt(x);
}
function abs(x){
    return Math.abs(x);
}