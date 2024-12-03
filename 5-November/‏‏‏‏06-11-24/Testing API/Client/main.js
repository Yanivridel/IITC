
// Global Elements
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const btnClr = document.getElementById("btn-clr");
const formContainer = document.getElementById("form-container");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginInputs = loginForm.getElementsByTagName("input");
const signupInputs = signupForm.getElementsByTagName("input");
const loginErr = document.querySelector(".login-invalid");
const signupErr = document.querySelector(".signup-invalid");
const overlay = document.querySelector(".overlay");
const popupX = document.querySelector(".popup .fa-xmark");
const loggedMsg = document.querySelector(".logged-msg");

// Event Listeners
formContainer.addEventListener("click", (e) => handleMenuClick(e));
loginBtn.addEventListener("click", handleLoginClick);
signupBtn.addEventListener("click", handleSignupClick);
loginForm.addEventListener("submit", (e) => handleLoginSubmit(e));
signupForm.addEventListener("submit", (e) => handleSignupSubmit(e));
for(const input of [...loginInputs, ...signupInputs])
    input.addEventListener("input", removeAllErr);
overlay.addEventListener("click", () => { removeOverlay(); handleLoginClick() });
popupX.addEventListener("click", () => { removeOverlay(); handleLoginClick() });

// Functions
function handleMenuClick(e) {
    if(e.target.matches(".fa-eye")) {
        hideEye(e);
    }
    if(e.target.matches(".fa-eye-slash")) {
        showEye(e);
    }
}
function handleLoginClick() {
    btnClr.classList.remove("right");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    clearAllInputs();
}
function handleSignupClick() {
    btnClr.classList.add("right");
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    clearAllInputs();
}
async function handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    try {
        const response = await fetch('/api/users/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        });
        // console.log(response.ok,response.status)
        if (response.status === 401 || !response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        // console.log("Response data:", result);
        handleSuccessLog();
    } catch (error) {
        showLoginErr();
        console.error("Error during login:", error);
    }
}
async function handleSignupSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    if(formValues.password !== formValues.repeatPassword) {
        showSamePassErr();
        return;
    }
    try {
        const response = await fetch('/api/users/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        });

        if (response.status === 400 || !response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        // console.log("Response data:", result);
        overlay.classList.remove("hidden");
    } catch (error) {
        showSignupErr();
        console.error("Error during login:", error);
    }
}
function handleSuccessLog() {
    loginForm.classList.add("hidden");
    loggedMsg.classList.remove("hidden");
}
function showLoginErr() {
    loginErr.classList.remove("hidden");
    for(const input of loginInputs){
        input.classList.add("shake", "error-input");
        setTimeout(() => {
            input.classList.remove("shake");
        }, 500);
    }
}
function showSamePassErr() {
    for(const input of [...(Array.from(signupInputs)).slice(-2)]){
        input.classList.add("shake", "error-input");
        setTimeout(() => {
            input.classList.remove("shake");
        }, 500);
    }
    signupErr.textContent = "Passwords do not match";
    signupErr.classList.remove("hidden");
}
function showSignupErr() {
    const input = signupInputs[2];
    input.classList.add("shake", "error-input");
    setTimeout(() => {
        input.classList.remove("shake");
    }, 500);
    signupErr.textContent = "Phone number already taken";
    signupErr.classList.remove("hidden");
}

// help functions
function clearAllInputs() {
    for(const input of [...loginInputs,...signupInputs])
        input.value = "";
    removeAllErr();
    loggedMsg.classList.add("hidden");
}
function removeAllErr() {
    for(const input of [...loginInputs, ...signupInputs])
        input.classList.remove("error-input");
    loginErr.classList.add("hidden");
    signupErr.classList.add("hidden");
}
function removeOverlay() {
    overlay.classList.add("hidden");
}
function showEye(e) {
    const relContainer = e.target.parentElement
    const passwordInput = relContainer.querySelector("input");
    passwordInput.type = "text";
    relContainer.querySelector(".fa-eye-slash").classList.add("hidden");
    relContainer.querySelector(".fa-eye").classList.remove("hidden");
}
function hideEye(e){
    const relContainer = e.target.parentElement
    const passwordInput = relContainer.querySelector("input");
    passwordInput.type = "password";
    relContainer.querySelector(".fa-eye").classList.add("hidden");
    relContainer.querySelector(".fa-eye-slash").classList.remove("hidden");

}