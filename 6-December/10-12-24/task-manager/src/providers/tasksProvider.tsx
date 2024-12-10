import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

export interface Task {
    title: string;
    desc: string;
    dueDate: Date;
    priority: "low" | "med" | "high";
    status: "pending" | "progress" | "completed";
}

export interface TaskWithId extends Task {
    id: string;
}

interface TasksContextType {
    tasks: TaskWithId[];
    addTask: (task: Task) => Promise<boolean>;
    editTask: (task: TaskWithId) => Promise<boolean>;
    removeTask: (id: string) => Promise<boolean>;
}

const TasksContext = createContext<TasksContextType | null>(null);

interface TasksProviderProps {
    children: React.ReactNode;
}

export default function TasksProvider({ children }: TasksProviderProps) {
    const [ tasks, setTasks] = useState<TaskWithId[]>([]);

    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await api.get("/tasks");
                
                const tasks = data.map((task: any) => ({
                ...task,
                dueDate: new Date(task.dueDate),
                }));
                console.log(tasks)
                setTasks(tasks);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }
    
        getTasks();
    }, []);

    const addTask = async (task: Task) => {
        try {
            const { data: addedTask} = await api.post(`/tasks`, task);
            setTasks(tasks => [ ...tasks, addedTask]);
            return true;
        }
        catch(err) {
            console.error("Failed adding task: " + err);
            return false;
        }
    }
    const editTask = async (updatedTask: TaskWithId) => {
        try {
            const { data } = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
            setTasks(tasks => tasks.map(task => task.id === updatedTask.id ? data : task));
            return true;
        } catch (err) {
            console.error("Error updating task:", err);
            return false;
        }
    }
    const removeTask = async (id: string) => {
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(tasks => tasks?.filter((task) => task.id !== id) || tasks);
            return true;
        }
        catch(err) {
            console.error("Failed deleting task " + id + " : " + err);
            return false;
        }
    }

    return (
    <TasksContext.Provider
        value={{
            tasks,
            removeTask,
            addTask,
            editTask,
        }}
    >
        {children}
    </TasksContext.Provider>
    );
}

// Custom hook for Tasks
export function useTasks() {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTasks must be used inside TasksProvider");
    }

    return context;
}
