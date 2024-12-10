import React, { useState } from "react";

import { Task, TaskWithId } from "../providers/tasksProvider";

interface TaskModalProps {
    task: Task | TaskWithId | null;
    onClose: () => void;
    onSave: (task: Task | TaskWithId) => void;
}

const TaskModal = ({ task, onClose, onSave } : TaskModalProps) => {
    const [formData, setFormData] = useState<Task | TaskWithId>(
    task || { title: "", desc: "", dueDate: new Date(), priority: "low", status: "pending" }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: name === "dueDate" ? new Date(value) : value,
    }));
    };

    const handleSubmit = () => {
    onSave(formData);
    };

    return (
    <div className="modal-overlay">
        <div className="modal">
        <h2>{task ? "Edit Task" : "Add Task"}</h2>
        <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
        />
        <input
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Description"
            required
        />
        <input
            type="date"
            name="dueDate"
            value={formData.dueDate.toString()}
            onChange={handleChange}
            required
        />
        <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="med">Medium</option>
            <option value="high">High</option>
        </select>
        <select name="status" value={formData.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose} style={{ backgroundColor: "#dc3545" }}>
            Cancel
        </button>
        </div>
    </div>
    );
};

export default TaskModal;
