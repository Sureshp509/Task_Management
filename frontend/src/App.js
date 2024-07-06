import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tasks" element={<TaskList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
