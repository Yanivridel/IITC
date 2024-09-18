
const _addButton = document.getElementById("add-button");
const _input = document.getElementById("input");
const _toDoList = document.getElementById("list");


_addButton.addEventListener('click', addToDo);
_toDoList.addEventListener('click', (e) => { handleCheckTask(e)})

// localStorage.clear();
localStorage.setItem("list", JSON.stringify([]));

function displayList() {
    const tasks = JSON.parse(localStorage.getItem("list"));
    
    _toDoList.innerHTML = '';

    for(const task of tasks) {        
        _toDoList.innerHTML += `<li data-task-id=${task.id}>
                <div class="check-and-text">
                    <input type="checkbox" ${task.isChecked ? "checked": ""}/>
                    <p class="task${task.isChecked ? " done":""}">${task.text}</p>
                </div>
                <div class="actions">
                    <icon class="fas fa-edit"></icon>
                    <icon class="fas fa-trash-alt"></icon>
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
            if(tasks[i].id === parseInt(e.target.parentElement.parentElement.dataset.taskId)){
                tasks[i].isChecked = !tasks[i].isChecked;
                break;
            }
        }
        localStorage.setItem("list", JSON.stringify(tasks));
        displayList();
    }
    if(e.target.nodeName === 'ICON' && e.target.classList.contains("fa-trash-alt")){
        const li = e.target.parentElement.parentElement;

        for(let i=0; i < tasks.length; i++) {
            if(tasks[i].id === parseInt(li.dataset.taskId)){
                tasks.splice(i,1);
                break;
            }
        }
        localStorage.setItem("list", JSON.stringify(tasks));
        displayList();
    }
}

