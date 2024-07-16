import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import Reviews from './components/Reviews';
import CreateTask from './components/CreateTask';
import TaskDashboard from './components/TaskDashboard';
import TaskDetails from './components/TaskDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/task_create" element={<CreateTask />} />
        <Route path="/task_dashboard" element={<TaskDashboard />} />
        <Route path="/task_details" element={<TaskDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
