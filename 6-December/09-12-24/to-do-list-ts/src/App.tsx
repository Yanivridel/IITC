import { useRef, useState } from "react"
import Task from "./components/Task";

export interface Todo {
  id: string,
  text: string,
  completed: boolean,
  description?: string,
}

function App() {
  const [ toDos, setToDos] = useState<Todo[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const textRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const filteredToDos = toDos.filter((todo) => {
    const matchesSearch = todo.text.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "incomplete" && !todo.completed);
  
    return matchesSearch && matchesStatus;
  });

  const totalTodos = toDos.length;
  const completedTodos = toDos.reduce((total, curr) => curr.completed ? total+1:total, 0);
  const incompletedTodos = totalTodos - completedTodos;

  const AddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData.entries()) as { [key: string]: string };
    console.log(data);

    // Checks no same title / empty task
    if(data.text && !toDos.some((todo) => todo.text === data.text)) {
      const newTodo: Todo = {
        id: crypto.randomUUID(), 
        text: data.text,
        completed: false,
        description: data.desc || undefined
      };

    setToDos((prev) => [...prev, newTodo]);
    }

    if (textRef.current) textRef.current.value = '';
    if (descRef.current) descRef.current.value = '';
  }

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
  <>
    <h1>To Do List Website</h1>
    <form onSubmit={(e) => AddTodo(e)}>
      <label htmlFor="text"></label>
      <input ref={textRef} id="text" name="text" placeholder="Enter Task..."/>
      <label htmlFor="desc"></label>
      <input ref={descRef} id="desc" name="desc" placeholder="Enter desc (Not Required)"/>
      <button>Add To Do</button>
    </form>
    <h2>Filtering</h2>
    <label htmlFor="search-text">Search task by title</label>
    <input id="search-text" name="search-text" placeholder="Enter title..." value={searchText} onChange={(e) => handleSearchTextChange(e)}/>
    <label htmlFor="filter-status">Filter by status:</label>
    <select id="filter-status" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
    <div>
      <h2>Information</h2>
      <p>All todos: <span>{totalTodos}</span></p>
      <p>Completed todos: <span>{completedTodos}</span></p>
      <p>Incompleted todos: <span>{incompletedTodos}</span></p>
    </div>
    
    <ul id="todos-list">
    {filteredToDos.map(task => (
      <li key={task.id}>
        <Task task={task} setToDos={setToDos} />
      </li>
    ))}
    </ul>
    <button className="remove-all" onClick={() => setToDos([])}>Remove All To Dos !</button>
  </>
  )
}

export default App
