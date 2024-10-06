import { initDB, getLocal, setLocal } from './utils.js'

initDB();

// Global Elements
const _pinForm = document.querySelector(".enter-pin-container");
const _selectActionForm = document.querySelector(".choose-action-container")
const _selectAction = _selectActionForm.querySelector("select");
const amountContainer = _selectActionForm.querySelector("#amount-container");
const amountShow = _selectActionForm.querySelector("#amount-show");
const _exitButton = document.querySelector(".exit-button");
const _overlay = document.querySelector(".overlay");
const _exitForm = document.querySelector(".exit-form");
const _transUl = document.querySelector(".trans-ul");

_pinForm.addEventListener("click", (e) => handlePinSubmit(e));
_pinForm.addEventListener("submit", (e) => e.preventDefault());
_selectAction.addEventListener("change", (e) => handleActionChange(e));
_exitButton.addEventListener("click", displayExitMsg);
_overlay.addEventListener("click", unDisplayExitMsg);
_exitForm.addEventListener("click", (e) => handleExitForm(e));

amountContainer.querySelector("button").addEventListener("click", (e) => handleDepositWithdraw(e)); 

function handleDepositWithdraw(e) {
    const action = _selectAction.value;
    const errElement = _selectActionForm.querySelector(".error-msg");
    const amount = e.target.parentElement.querySelector("input").value;
    if(action === 'deposit')
        deposit(amount,errElement);
    else
        withdraw(amount,errElement);
}

let attempts = 3;

function handlePinSubmit(e) {
    if(attempts === 0) return;
    const user = getLocal("user");
    const errElement = _pinForm.querySelector(".error-msg");
    
    if(e.target.matches("#pin-button")) {
        const inputPin = e.target.parentElement.querySelector("input");
        if(inputPin.value === "") return;
        if(inputPin.value === user.pin){
            _pinForm.classList.remove("active-flex");
            _selectActionForm.classList.add("active-flex");
            errElement.classList.remove("active-block");
            inputPin.value = "";
        }
        else {
            attempts -= 1;
            errElement.innerHTML = attempts > 0 ?
            `Wrong PIN<br/>Attempts left: ${attempts}` :
            "Account Locked 😢";
            errElement.classList.add("active-block");
        }
    }
    
}
function handleActionChange(e) {
    const errElement = _selectActionForm.querySelector(".error-msg");
    errElement.classList.remove("active-block");
    amountContainer.classList.remove("active-block");
    amountShow.classList.remove("active-block");
    _transUl.classList.remove("active-block");


    switch (e.target.value){
        case "show-balance":
            amountShow.textContent = `Current Balance: ${balanceCheck()}` ;
            amountShow.classList.add("active-block");
            break;
        case "withdraw":
        case "deposit":
            amountContainer.classList.add("active-block");
            break;
        case "last-transactions":
            renderTrans();
            break;
        default:
            console.log("Invalid action");
    }
}
function displayExitMsg() {
    _overlay.classList.add("active-block");
    _exitForm.classList.add("active-flex");
}
function unDisplayExitMsg() {
    _overlay.classList.remove("active-block");
    _exitForm.classList.remove("active-flex");
}
function handleExitForm(e) {
    if(e.target.matches(".exit")) {
        _pinForm.classList.add("active-flex");
        _selectActionForm.classList.remove("active-flex");
        unDisplayExitMsg();
    }
    else if(e.target.matches(".keep-logged"))
        unDisplayExitMsg();
}
function renderTrans() {
    const user = getLocal("user");
    _transUl.classList.add("active-block");
    _transUl.innerHTML = "";

    user.lastTrans.forEach((element,idx) => {
        _transUl.innerHTML += `<li>${idx+1}. ${element.action} -> ${element.amount}$</li>`
    });
}


// ATM Default Functions
function balanceCheck(){
    return Number(getLocal("user").balance).toFixed(2);
}
function withdraw(amount, errElement) {
    const user = getLocal("user");
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
        errElement.classList.add("active-block");
        errElement.textContent = "Please enter a valid number";
        return;
    }

    if (parsedAmount > user.balance) {
        errElement.classList.add("active-block");
        errElement.textContent = "Cannot withdraw more than you have";
    } 
    else if (parsedAmount <= 0) {
        errElement.classList.add("active-block");
        errElement.textContent = "Cannot withdraw a negative or zero amount";
    } 
    else {
        user.balance -= parsedAmount;
        user.lastTrans.unshift({ action: "withdraw", amount: parsedAmount });
        amountShow.classList.add("active-block");
        amountShow.textContent = `Successful withdraw. Current balance: ${user.balance}`;
        setLocal("user", user);
    }
}
function deposit(amount, errElement){
    if(amount < 0) {
        errElement.classList.add("active-block");
        errElement.textContent = "Cannot deposit negative amount";
    }
    else {
        const user = getLocal("user");
        user.balance += parseFloat(amount);
        user.lastTrans.unshift({action:"deposit", amount});
        amountShow.classList.add("active-block");
        amountShow.textContent = `Successful deposit. Current balance: ${user.balance}`;
        setLocal("user", user);
    }
}

