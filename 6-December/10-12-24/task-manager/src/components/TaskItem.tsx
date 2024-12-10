
import { TaskWithId } from "../providers/tasksProvider";

interface TaskItemProps {
  task: TaskWithId;
  onEdit: (task: TaskWithId) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onEdit, onDelete }: TaskItemProps) => {
  return (
    <li className="task-item">
      <h2>{task.title}</h2>
      <p>{task.desc}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toDateString()}</p>
      <button onClick={() => onEdit(task)}>Edit Task</button>
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
    </li>
  );
};

export default TaskItem;
