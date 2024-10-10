
import { WEATHER_API }  from './config.js';
console.log(WEATHER_API);

const baseUrlWeather = "https://api.openweathermap.org/data/2.5/weather";

const formElement = document.querySelector("form")
const containerElement = document.querySelector(".container")
const listBtnElement = document.querySelector("#get-list")
const ulElement = document.getElementById("name-list")
const mainImg = document.getElementById("main-img");
let lastImg = null;

ulElement.addEventListener("click", (e) => handleListClick(e));

function handleListClick(e) {
    if(e.target.matches("li")) {
        const text = e.target.textContent;

        if(text === lastImg)
            mainImg.classList.toggle("hidden");
        else
            mainImg.classList.remove("hidden");
        lastImg = text;

        mainImg.src = `https://random-d.uk/api/v2/${text}`
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function fetchWeather() {
    fetch(`${baseUrlWeather}/?lat=32.0853&lon=34.7818&appid=${WEATHER_API}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error fetching weather: " + err));
}
fetchWeather();

function formSubmit (formObejct) {
    // console.log(formObejct.number);
    const url = `https://random-d.uk/api/v2/${formObejct.number}.jpg`;
    console.log(url);

    // Insert image

    const imageElement = document.createElement("img");
    imageElement.src = url;
    containerElement.innerHTML = "";
    containerElement.appendChild(imageElement);
}

const renderNames = (namesArray) => {
    // const list = document.createElement("ul");
    // list.classList.add("")
    namesArray.sort();
    namesArray.forEach(name => {
        const liElement = document.createElement("li")
        liElement.innerText = name
        ulElement.appendChild(liElement)
        // console.log(name);
    });
}

const getDuckList = () => {
    const proxyUrl = "https://corsproxy.io/?";
    const targetUrl = 'https://random-d.uk/api/v2/list';

    fetch(proxyUrl + encodeURIComponent(targetUrl))
        .then(response => response.json())
        .then(data => {
            // console.log('Images:', data.images);
            // console.log('GIFs:', data.gifs);
            // renderNames(data.images);
            renderNames(data.gifs);
        })
        .catch(error => {
            console.error('Error fetching duck list:', error);
        });
}

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(formElement);
    // console.log(formData);

    const formObject = Object.fromEntries(formData);
    // console.log(formObject);

    formSubmit(formObject);
})

listBtnElement.addEventListener("click", () => {
    getDuckList()
})
