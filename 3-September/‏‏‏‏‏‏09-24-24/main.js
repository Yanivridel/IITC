import { initDB, getLocal, setLocal } from "./utils.js";
import { addEmployee, removeEmployeeById, editEmployee } from "./employees.services.js";

// Global Elements
const _cardContainer = document.getElementById("cards-container");
const _darkOverlay = document.getElementById("black-overlay");
const _addEditForm = document.getElementById("add-edit-form");
const _header = document.getElementById("content-header");
const _addEditInputs = document.querySelectorAll(".inputs-container input, .inputs-container select");
let editId = null;
const _filterSelect = document.getElementById("filter-select");
const _sortDirection = document.getElementById("sort-direction");
const _salaryInput = document.getElementById("salary-input");
const _nameInput = document.getElementById("name-input");
const _dateInput = document.getElementById("date-input");


initDB();
renderCardsGrid();

_header.addEventListener("click", (e) => handleHeaderClick(e));
_darkOverlay.addEventListener("click", unDisplayAddEditForm);
_addEditForm.addEventListener("click", (e) => handleAddEditFormClick(e));
_addEditForm.addEventListener("submit", (e) => handleFormSubmit(e));
_cardContainer.addEventListener("click", (e) => handleCardContainerClick(e));
_filterSelect.addEventListener("change", (e) => renderCardsGrid());
_sortDirection.addEventListener("change", (e) => renderCardsGrid());
_salaryInput.addEventListener("input", handleSalaryInput);
_dateInput.addEventListener("change", renderCardsGrid);
_nameInput.addEventListener("input", renderCardsGrid);

function renderCardsGrid(dontSort = false) {
    let employees = getLocal("employees");
    _cardContainer.innerHTML = "";
    const sortBy = _filterSelect.value;
    const searchedName = _nameInput.value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(searchedName, 'i'); // insensitive for upper/lower case

    employees = employees.filter(employee => 
        (employee.salary >= Number(_salaryInput.value)) && (employee.startDate > _dateInput.value) &&
        (!searchedName || regex.test(`${employee.firstName} ${employee.lastName}`)));

    if(!dontSort && sortBy) {
        employees.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
        if(_sortDirection.value === 'descending') employees.reverse();
    }

    for(const employee of employees) {
        _cardContainer.innerHTML += `
        <div class="card flex flex-column items-center content-spaceBetween" data-id=${employee.id}>
            <div>
            <h2 class="card-title">${employee.firstName} ${employee.lastName}</h2>
            <hr/>
            <div class="card-details">
                <p><span>Age: </span>${employee.age}</p>
                <p><span>Gender: </span>${employee.gender}</p>
                <p><span>Start-Date: </span>${employee.startDate}</p>
                <p><span>Department: </span>${employee.department}</p>
                <p><span>Salary: </span>${employee.salary}</p>
            </div>
            </div>
            <div class="card-actions">
                <button class="remove-button button">Remove</button>
                <button class="edit-button button">Edit</button>
            </div>
        </div>`
    }
}

function handleHeaderClick(e) {
    if(e.target.matches("button.add-button"))
        displayAddEditForm();
}
function displayAddEditForm() {
    _darkOverlay.style.display = "block";
    _addEditForm.style.display = "flex";
    for(const inputOrSelect of _addEditInputs)
        inputOrSelect.value = "";
}
function unDisplayAddEditForm() {
    _darkOverlay.style.display = "none";
    _addEditForm.style.display = "none";
}
function handleAddEditFormClick(e) {
    if(e.target.matches(".fa-arrow-right"))
        unDisplayAddEditForm();
}
function handleFormSubmit(e) {
    e.preventDefault();
    const props = [];
    
    for(const inputOrSelect of _addEditInputs)
        props.push(inputOrSelect.value);
    if(editId)
        editEmployee(editId, ...props);
    else
        addEmployee(...props);
    renderCardsGrid();
    unDisplayAddEditForm();
    editId = null;
}
function handleCardContainerClick(e) {
    console.log(e.target);
    
    if(e.target.matches("button.edit-button")) {
        displayAddEditForm();
        const _card = e.target.closest(".card");
        editId = _card.dataset.id;
        const _cardDetails = Array.from(_card.querySelectorAll("h2, p"));
        
        const props = [..._cardDetails.shift().textContent.split(" ")];
        props.push(..._cardDetails.map(p =>{
            const item = p.textContent.slice(p.textContent.indexOf(" ") + 1);
            return isNaN(item) ? item : Number(item);
            }
        ));
        
        for(let i=0; i< _addEditInputs.length; i++)
            _addEditInputs[i].value = props[i];
    }
    else if(e.target.matches("button.remove-button")) {
        const _cardId = e.target.closest(".card").dataset.id;
        removeEmployeeById(_cardId);
        renderCardsGrid();
    }
}
function handleSalaryInput() {
    const _salaryLabel = document.getElementById("salary-label");
    _salaryLabel.textContent = "Min Salary: " + _salaryInput.value;
    renderCardsGrid();
}

Sortable.create(_cardContainer, {
    animation: 150,
    delay: 300,
    delayOnTouchOnly: true,
    ghostClass: 'sortable-ghost',
    // After Sorting, change the spot in local storage :
    onEnd: function (evt) {
        let employees = getLocal("employees");
        const newOrder = Array.from(_cardContainer.children).map(card => card.dataset.id);
        const reorderedEmployees = newOrder.map(id => employees.find(emp => emp.id == id));

        reorderedEmployees.forEach((emp, index) => {
            const fullIndex = employees.findIndex(e => e.id == emp.id);
            if (fullIndex !== -1) {
                employees.splice(fullIndex, 1);
                employees.splice(index, 0, emp);
            }
        });

        setLocal("employees", employees);
        renderCardsGrid(true);
    }
});
