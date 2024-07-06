import React, { useState } from 'react';
import { createTask } from '../services/api';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('pending');
    const [category, setCategory] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask({ title, description, dueDate, status, category }, token);
            setTitle('');
            setDescription('');
            setDueDate('');
            setStatus('pending');
            setCategory('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Due Date:</label>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Category:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;
