import { useState } from "react";
import { TaskWithId, useTasks } from "./providers/tasksProvider";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import TaskModal from "./components/TaskModal";
import "./styles.css";
// Import Types
import { PriorityType, StatusType } from "./types/tasksTypes";


function App() {
  const { tasks, addTask, removeTask, editTask } = useTasks();
  const [filterStatus, setFilterStatus] = useState<StatusType>("all");
  const [filterPriority, setFilterPriority] = useState<PriorityType>("all");
  const [filterTitle, setFilterTitle ] = useState("");
  const [modalTask, setModalTask] = useState<TaskWithId | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const openModal = (task: TaskWithId | null) => {
    setModalTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTask(null);
  };

  const handleDelete = () => {
    if (taskToDelete) {
      removeTask(taskToDelete);
      setTaskToDelete(null);
    }
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (filterPriority === "all" || task.priority === filterPriority) &&
      (filterStatus === "all" || task.status === filterStatus) &&
      task.title.toLowerCase().includes(filterTitle)
  );

  return (
    <div className="app-container">
      <h1>Tasks Management TypeScript</h1>

      <button className="add-button" onClick={() => openModal(null)}>
        Add Task
      </button>

      {/* Filtering */}
      <Filter
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
      />

      <TaskList tasks={filteredTasks} onEdit={task => openModal(task)} onDelete={(id) => setTaskToDelete(id)} />

      {isModalOpen && (
        <TaskModal
          task={modalTask}
          onClose={closeModal}
          onSave={(task) => {
            if (task.hasOwnProperty("id")) {
              editTask(task as TaskWithId);
            } else {
              addTask(task);
            }
            closeModal()
            }
          }
        />
      )}

      {/* Delete Task Modal */}
      {taskToDelete && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <p>Are you sure you want to delete this task?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => setTaskToDelete(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
