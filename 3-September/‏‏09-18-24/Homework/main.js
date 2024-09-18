
const _addButton = document.getElementById("add-button");
const _input = document.getElementById("input");
const _toDoList = document.getElementById("list");
const _filter = document.getElementById("filter");
const _clearList = document.getElementById("clear-list");

_addButton.addEventListener('click', addToDo);
_toDoList.addEventListener('click', (e) => { handleCheckTask(e)})
_filter.addEventListener('change', displayList);
_clearList.addEventListener('click', clear);

function clear() {localStorage.clear(); displayList()};

if(!localStorage.getItem("list"))
    localStorage.setItem("list", JSON.stringify([]));

function displayList() {
    const tasks = JSON.parse(localStorage.getItem("list"));
    _toDoList.innerHTML = '';
    if(!tasks) {
        localStorage.setItem("list", JSON.stringify([]));
        return;
    }

    for(const task of tasks) {
        if(_filter.value === 'complete' && !task.isChecked ||
            _filter.value === 'incomplete' && task.isChecked)
            continue;
        _toDoList.innerHTML += `<li data-task-id=${task.id}>
                <div class="check-and-text">
                    <input type="checkbox" ${task.isChecked ? "checked": ""}/>
                    <p class="task${task.isChecked ? " done":""}">${task.text}</p>
                </div>
                <div class="actions">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash-alt"></i>
                </div>
            </li>`;

        /*
        const li = document.createElement("li");
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("check-and-text");
        const p = document.createElement('p');
        p.textContent = task;
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(p)
        li.appendChild(taskDiv);
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add("actions");
        const i1 = document.createElement('icon');
        i1.classList.add("fas");
        i1.classList.add("fa-edit");
        const i2 = document.createElement('icon');
        i2.classList.add("fas");
        i2.classList.add("fa-trash-alt");
        actionsDiv.appendChild(i1);
        actionsDiv.appendChild(i2);
        li.appendChild(actionsDiv);
        _toDoList.appendChild(li);
        */
    }
}
displayList();

function addToDo() {
    if(_input.value === "") return;
    const tasks = JSON.parse(localStorage.getItem("list"));
    tasks.push({
        text:_input.value,
        isChecked:false,
        id: Date.now()
    });
    _input.value = '';
    localStorage.setItem("list", JSON.stringify(tasks));
    displayList();
}

function handleCheckTask(e) {
    const tasks = JSON.parse(localStorage.getItem("list"));
    if(e.target.nodeName === 'INPUT' && e.target.type === 'checkbox') {
        const taskText = e.target.parentElement.querySelector('p');
        for(let i=0; i < tasks.length; i++) {
            if(tasks[i].id === parseInt(e.target.closest('li').dataset.taskId)){
                tasks[i].isChecked = !tasks[i].isChecked;
                break;
            }
        }
    }
    else if(e.target.nodeName === 'I' && e.target.classList.contains("fa-trash-alt")){
        const li = e.target.closest('li');
        for(let i=0; i < tasks.length; i++) {
            if(tasks[i].id === parseInt(li.dataset.taskId)){
                tasks.splice(i,1);
                break;
            }
        }
    }
    else if(e.target.nodeName === 'I' && e.target.classList.contains("fa-edit")){
        const taskText = e.target.closest('li').querySelector('p');
        taskText.contentEditable = "true";
        taskText.focus(); 
        
        taskText.addEventListener('blur', (e) => updateText(e));
        taskText.addEventListener('keydown', (e) => updateText(e));

        function updateText(e) {
            if(!e.key || e.key === "Enter"){
                taskText.contentEditable = "false";
                for(const task of tasks){
                    if(task.id === parseInt(e.target.closest('li').dataset.taskId)){
                        task.text = taskText.textContent;
                    }
                }
                localStorage.setItem("list", JSON.stringify(tasks));
                displayList();
            }
        }
        return;
    }
    else if(e.target.nodeName === 'P'){
        return;
    }
    localStorage.setItem("list", JSON.stringify(tasks));
    displayList();
}

