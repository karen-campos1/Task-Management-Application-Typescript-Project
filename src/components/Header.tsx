import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><a className="nav-link" href="#" id="login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
              <li className="nav-item"><Link className="nav-link" to="/registration">Register</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">
                  Tasks
                </a>
                <ul className="dropdown-options" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/task_dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/task_create">Create</Link></li>
                  <li><Link className="dropdown-item" to="/task_details">Details</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" pattern="[\w]+@[\w]+[.][a-z]{2,3}" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="mt-3">
                  <p>Not a member? <Link to="/registration">Sign up here</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
