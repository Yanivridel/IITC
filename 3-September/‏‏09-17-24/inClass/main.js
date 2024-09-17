
const _content = document.getElementById("content");
const _texts = document.querySelectorAll('.text');
const _listItems = document.querySelectorAll('li');
const _button = document.getElementById("button");

//  Task 1
_button.addEventListener('click', handleButtonClick);

_content.style.backgroundColor = 'lightblue';
for(const text of _texts){
    text.style.color = "red";
}
for(const li of _listItems){
    console.log(li.textContent);
}

function handleButtonClick() {
    for(const li of _listItems){
        if(li.style.backgroundColor === 'yellow')
            li.style.backgroundColor = 'transparent';
        else
            li.style.backgroundColor = 'yellow';
    }
}

// Task 2
let count = 1;
const _itemsList = document.getElementById("items-list");
const _addItemButton = document.getElementById("add-item-button");
const _removeFirstItemButton = document.getElementById("remove-first-item-button");
const _removeLastItemButton = document.getElementById("remove-last-item-button");
const _removeSelectedItemButton = document.getElementById("remove-selected-item-button");

_addItemButton.addEventListener('click', addNewItem);
_removeFirstItemButton.addEventListener('click', removeFirstItem);
_removeLastItemButton.addEventListener('click', removeLastItem);
_removeSelectedItemButton.addEventListener('click', removeSelectedItem);

function addNewItem() {
    const newLi = document.createElement("li");
    newLi.textContent = `New Item ${count++}`;
    newLi.classList.add("item")
    newLi.addEventListener('click', () => {
        const allLi = document.querySelectorAll(".item");
        for(const li of allLi)
            li.classList.remove("selected");
        newLi.classList.add("selected")}
    );
    _itemsList.appendChild(newLi);
}

function removeFirstItem() {
    if(_itemsList.children[0])
        _itemsList.removeChild(_itemsList.children[0]);
}
function removeLastItem() {
    if(_itemsList.children[_itemsList.children.length-1])
        _itemsList.removeChild(_itemsList.children[_itemsList.children.length-1]);
}
function removeSelectedItem() {
    const allLi = document.querySelectorAll(".item");
    for(const li of allLi)
        if(li.classList.contains("selected"))
            _itemsList.removeChild(li);
}

// Task 3
const _nameInput = document.getElementById('nameInput');
const _greeting = document.getElementById("greeting");
const _clearInput = document.getElementById("clear-input");
_nameInput.addEventListener('input', updateGreeting);
_clearInput.addEventListener('click', clearInput);

function updateGreeting() {
    if(_nameInput.value === "")
        _greeting.textContent = `Hello guest !`;
    else
        _greeting.textContent = `Hello ${_nameInput.value} !`;
}
function clearInput(){
    _nameInput.value = "";
    updateGreeting();
}

// Task 4
const _box = document.getElementById("box");
const _changeStyle = document.getElementById("change-style");

_changeStyle.addEventListener('click', changeStyle)

_box.style.height = "100px";
_box.style.width = "100px";
_box.style.border = "4px solid black";
_box.style.margin = "5px";

function changeStyle() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    if((parseInt(_box.style.width) * 2) < 300)
        _box.style.height = _box.style.width = (parseInt(_box.style.width) * 2) + 'px';
    _box.style.borderColor = '#' + randomColor;
}

// Task 5
let buttons = document.querySelectorAll('.num-button');
for(let i=1; i <= 5; i++) {
    buttons[i-1].addEventListener('click', (event) => alertButton(event,i));
}

function alertButton(event, index) {
    alert(`Click Button ${index}`)
}


