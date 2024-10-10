
const _buttonsCont = document.querySelector(".buttons-container");
const _mainFetchBtn = document.getElementById("fetch-button");
const _mainImg = document.getElementById("main-img");
const _selectAnime = document.getElementById("select-anime");
const _loading = document.querySelector(".fa-spinner");
let animeType = "waifu";
let buttonText = null;

_mainFetchBtn.addEventListener("click", (e) => handleFetchClick(e));
_buttonsCont.addEventListener("click", (e) => handleButtonsClick(e));
_selectAnime.addEventListener("change", (e) => { animeType = e.target.value; console.log(animeType) } );

function handleButtonsClick(e) {
    unDisplaySelectImage();
    unDisplayLoading();
    if(e.target.matches("#dogs-button"))
        _mainFetchBtn.textContent = "Generate Dog";
    else if(e.target.matches("#food-button"))
        _mainFetchBtn.textContent = "Generate Food";
    else if(e.target.matches("#fox-button"))
        _mainFetchBtn.textContent = "Generate Fox";
    else if(e.target.matches("#anime-button")) {
        displaySelect();
        _mainFetchBtn.textContent = "Generate Anime";
    }
    else if(e.target.matches("#art-button"))
        _mainFetchBtn.textContent = "Generate Art";
}

function handleFetchClick(e) {
    const text = e.target.textContent;
    displayLoading(text);
    if(text === "Generate Dog")
        generateRandomDog();
    else if(text === "Generate Food")
        generateRandomFood();
    else if(text === "Generate Fox")
        generateRandomFox();
    else if(text === "Generate Anime")
        generateRandomAmine();
    else if(text === "Generate Art")
        generateRandomArtwork();
    else
        unDisplayLoading();
}

// DOGS
function generateRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const img = new Image();
        img.src = data.message;
        img.onload = () => loadImage(img); 
        unDisplayLoading();
    })
    .catch(err => console.log("Error Fetching Dogs: " + err));
}

// COFFEE
function generateRandomFood() {
    fetch('https://foodish-api.com/api')
    .then(response => response.json())
    .then(data => {
        // console.log(data);        
        const img = new Image();
        img.src = data.image;
        img.onload = () => loadImage(img);
        unDisplayLoading();
    })
    .catch(err => console.log("Error Fetching Food: " + err));
}

// Foxes
function generateRandomFox() {
    fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
        // console.log(data); 
        const img = new Image();
        img.src = data.image;
        img.onload = () => loadImage(img);
        unDisplayLoading();
    })
    .catch(err => console.log("Error Fetching Fox: " + err));
}

// Anime
function generateRandomAmine() {
    fetch(`https://api.waifu.pics/sfw/${animeType}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const img = new Image();
        img.src = data.url;
        img.onload = () => loadImage(img);
        unDisplayLoading();
    })
    .catch(err => console.log("Error Fetching Duck: " + err));
}

// Art
function generateRandomArtwork() {
    const randomPage = Math.floor(Math.random() * 100) + 1; // random page
    fetch(`https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=100&fields=id,title,image_id`)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.data.length);  
            const artwork = data.data[randomIndex]; // random art in the page

            if (artwork.image_id) {
                const img = new Image();
                img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`; 
                img.onload = () => loadImage(img);
                unDisplayLoading();
            } else {
                console.log("Current art have nave no image, trying again...");
                generateRandomArtwork(); // recursion for another art
            }
        })
        .catch(err => console.error("Error fetching art:", err));
}

// Help functions
function loadImage(img) {
    _mainImg.style.backgroundImage = `url(${img.src})`;
    _mainImg.style.width = img.naturalWidth + 'px';
    _mainImg.style.height = img.naturalHeight + 'px';
}
function unDisplaySelectImage() {
    _selectAnime.classList.add("hidden");
    _mainImg.style.backgroundImage = "none";
    _mainImg.style.width = '100px';
    _mainImg.style.height = '50px';
}
function displaySelect() {
    _selectAnime.classList.remove("hidden");
}
function displayLoading(text) {
    _loading.classList.remove("hidden");
    _mainFetchBtn.textContent = "";
    if(text !== "") buttonText = text;
}
function unDisplayLoading() {
    _loading.classList.add("hidden");
    _mainFetchBtn.textContent = buttonText;    
}