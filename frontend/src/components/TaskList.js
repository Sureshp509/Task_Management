import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/api';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await getTasks(token);
            setTasks(data);
        };
        fetchTasks();
    }, [token]);

    const handleDelete = async (id) => {
        await deleteTask(id, token);
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => filter === 'all' || task.status === filter);

    return (
        <div>
            <h2>Tasks</h2>
            <TaskForm />
            <div>
                <label>Filter by status:</label>
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Due: {task.dueDate}</p>
                        <p>Status: {task.status}</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
