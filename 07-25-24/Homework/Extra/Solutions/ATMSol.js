let accBalance=10000.678;
let pin=1234;
const maxDrawLim = 5000;
let exitStatus=false;
let failedAttempts =0;
let lastTrans = [];
ATM();

function ATM(){
    do{
        let entered_pin=Number(prompt("Enter PIN"));
        if(!pinVerification(entered_pin)){
            console.log("Wrong PIN");
            failedAttempts++;
            if(failedAttempts===3){
                console.log("Account Locked");
                break;
            }
            continue;
        }
        failedAttempts=0;
        let amount;
        let action=prompt("write action to be done:\nBalance Check\nWithdraw\nDeposit\nLast transactions")
        action = action.toLowerCase();
        switch (action){
            case "balance check":
                console.log(`Success, Balance Check is: ${balanceCheck()}`);
                break;
            case "withdraw":
                amount=Number(prompt("Enter amount to withdraw"));
                console.log(withDrawal(amount));
                break;
            case "deposit":
                amount=Number(prompt("Enter amount to deposit"));
                deposit(amount);
                console.log("Success");
                break;
            case "last transactions":
                if(lastTrans.length === 0) console.log("No transactions done yet");
                for(let i=0;i<lastTrans.length && i<5;i++){
                    console.log(`${i+1}. ${lastTrans[i]}`);
                }
                break;
            default:
                console.log("Invalid action")
        }
        exitStatus=confirm("Do you wanna exit?")
    }
    while(!exitStatus);
}

// Functions
function pinVerification(entered_pin){
    return entered_pin===pin;
}
function balanceCheck(){
    return Number(accBalance).toFixed(2);
}
function withDrawal(amount){
    if(amount <= maxDrawLim && amount <= accBalance){
        console.log("Success");
        lastTrans.unshift(`withdraw ${amount}`);
        return amount;
    }
    return "Invalid withdrawal amount";
}
function deposit(amount){
    accBalance += amount;
    lastTrans.unshift(`deposit ${amount}`);
    return accBalance;
}

