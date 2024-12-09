import { useState } from "react";
import { Todo } from "../App";

interface TaskProps {
    task: Todo,
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function Task({ task, setToDos } : TaskProps) {
    const [ check, setCheck] = useState<boolean>(false);

    const handleDeleteToDo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        setToDos(todos => todos.filter(todo => todo.id !== id))
    }
    const handleCheckboxChange = () => {
        setToDos((todos) =>
            todos.map((todo) =>
            todo.id === task.id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
    <>
        <h1 className={task.completed ? 'overline' : ''}>{task.text}</h1>
        <p className={task.completed ? 'overline' : ''}>{task.description}</p>
        <button onClick={(e) => handleDeleteToDo(e, task.id)}>Delete To Do</button>
        <input
        id="task-checkbox"
        name="task-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
        />
    </>
    )
}

export default Task;