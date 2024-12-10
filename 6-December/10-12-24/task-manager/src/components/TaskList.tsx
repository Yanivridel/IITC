import TaskItem from "./TaskItem";

import { TaskWithId } from "../providers/tasksProvider";

interface TaskListProps {
  tasks: TaskWithId[];
  onEdit: (task: TaskWithId) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  return (
    <ul className="task-list">
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
