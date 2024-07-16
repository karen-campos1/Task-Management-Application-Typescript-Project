import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/task-creation-styles.css';
import { Task } from '../type/types';

const CreateTask: React.FC = () => {
  const [task, setTask] = useState<Task>({
    id: 0,
    name: '',
    description: '',
    priority: 0,
    dateCreated: '',
    completionDate: '',
    teamMembers: [],
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTask((prevTask: Task) => ({
      ...prevTask,
      [name]: name === 'teamMembers' ? value.split(',').map(member => member.trim()) : value,
    }));
  };

  return (
    <div>
      <Header />
      <main className="container my-2">
        <h1 className="display-5 text-center register">Create A Task</h1>
        <div className="dropdown-divider bg-info my-5"></div>
        <form onSubmit={handleSubmit} className="row g-3 p-4 was-validated" noValidate>
          <div className="form-floating col-12 mb-3">
            <input type="date" className="form-control" id="date" name="dateCreated" placeholder="03/15/2024" required value={task.dateCreated} onChange={handleChange} />
            <label htmlFor="date">Date</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a valid date.</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="text" className="form-control" id="task-name" name="name" placeholder="Quarterly Reviews" required value={task.name} onChange={handleChange} />
            <label htmlFor="task-name">Task Name</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter task name.</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="range" className="form-range" id="priority" name="priority" placeholder="Priority" required value={task.priority} onChange={handleChange} />
            <label htmlFor="priority">Priority</label>
          </div>
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label"></label>
            <textarea className="form-control" id="validationTextarea" name="description" placeholder="Project Description" required value={task.description} onChange={handleChange}></textarea>
            <div className="invalid-feedback">Please enter a description.</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="text" className="form-control" id="team-members" name="teamMembers" placeholder="Team Members" required value={task.teamMembers.join(', ')} onChange={handleChange} />
            <label htmlFor="team-members">Team Members on Project</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter team members.</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="date" className="form-control" id="completion-date" name="completionDate" placeholder="03/15/2024" required value={task.completionDate} onChange={handleChange} />
            <label htmlFor="completion-date">Estimated Date of Completion</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a valid date.</div>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btnr">Create Task</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateTask;
