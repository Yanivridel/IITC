// **** TASK 3: CALCULATOR **** //

let m = 0;
mainLoopCalc();

function mainLoopCalc(){
    let decision = false, mSymbol;
    let res;
    do{
        res = operate();
        mSymbol = prompt("Choose: M+,M-,MC,none");
        if(mSymbol!==null) mAction(res,mSymbol.toLowerCase());
        decision = confirm("Do you wanna exit?")
    }while(!decision)
    console.log("GoodBye");
}

function operate(){
    let x,y,symbol;
    do{
        x = prompt("Enter number or use MR");
        if(x!==null && x.toLowerCase()==="mr"){
            x=m;
            console.log(x);
            break;
        }
        else x = Number(x);
    } while(isNaN(x));
    symbol = prompt("Enter operator (+,-,*,/,^,sqrt,abs,factorial");
    if(symbol!==null) symbol=symbol.toLowerCase();
    if(symbol!=="sqrt" && symbol!=="abs" && symbol!=="factorial"){
        do{
            y = prompt("Enter number or use MR");
            if(y!==null && y.toLowerCase()==="mr"){
                y=m;
                break;
            }
            else y = Number(y);
        } while(isNaN(y));        
        res = Calc(x,y,symbol);
    }
    else{
        res = Calc(x,-1,symbol);
    }
    if(res!==-1) console.log(`The Answer is: ${res}`);
    return res;
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
        case "factorial":
            return factorial(x);
        default:
            console.log("Invalid operator input");
            return -1;
    }
}

function mAction(res,mSymbol){
    switch (mSymbol){
        case "m+":
            m+=res;
            break;
        case "m-":
            m-=res;
            break;
        case "mc":
            m=0;
            break;
        default:
            break;
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
function factorial(x){
    if(x>20){
        console.log("More than 20! is too hard for me");
        return -1;
    }
    let res=1;
    for(let i=2;i<=x;i++){
        res*=i;
    }
    return res;
}