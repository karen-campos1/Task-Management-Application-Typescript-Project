import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/homepage-styles.css';

const HomePage: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: window.location.origin }
    });
  };

  return (
    <div>
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
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    id="login"
                    onClick={handleShow}
                  >Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="nav1" href="/registration">Register</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tasks
                  </a>
                  <ul className="dropdown-options" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/task_dashboard">Dashboard</a></li>
                    <li><a className="dropdown-item" href="/task_create">Create</a></li>
                    <li><a className="dropdown-item" href="/task_details">Details</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Login Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isAuthenticated ? (
            <div>
              <p>Welcome, {user?.name}</p>
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <Button variant="primary" onClick={() => loginWithRedirect()}>
                Login
              </Button>
              <div className="mt-3">
                <p>Not a member? <a href="/registration">Sign up here</a></p>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>

      {/* Branding/Logo Section */}
      <div className="container-fluid" id="photo">
        <div className="row justify-content-center">
          <div className="col-lg-12 d-flex justify-content-center">
            <img src="./static/images/task_daddy_MAIN.png" className="img-fluid" alt="Logo" />
          </div>
        </div>
      </div>

      {/* Overview/About Section */}
      <section>
        <div className="container-fluid row justify-content-between align-items-center" id="overview">
          <div className="col-md-7">
            <p>
              Elevate your team's productivity with our innovative task management to-do list app. Seamlessly integrate your team's expertise into a centralized platform, empowering efficient collaboration and ensuring clarity every step of the way. With standardized task lists and robust controls, every member of your team can effortlessly stay aligned and focused, driving success in every project.
            </p>
          </div>
          <div className="col-md-5 d-flex align-content-center">
            <img src="./static/images/profesionals.jpeg" className="img-fluid" id="team" alt="professionals working" />
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <div className="container-fluid" id="professionals">
          <div className="row">
            <div className="col-md-12 pt-5">
              <img src="./static/images/team.jpeg" className="img-fluid" id="professionals-img" alt="professionals meetings" />
            </div>
          </div>
        </div>
      </section>

      {/* What is TASK DADDY */}
      <section className="container-fluid pt-5" id="about">
        <h2 className="mb-5 text-center" id="about-header" style={{ textAlign: 'center' }}>What TASK DADDY Is All About</h2>
        <div className="row">
          <div className="col-md-12 d-flex align-items-center">
            <p className="about-text">
              Task Daddy is the ultimate task management to-do list app in 2024. It's designed to streamline your workflow and enhance team productivity. With Task Daddy, you can effortlessly monitor and track the progress of every task, ensuring a smooth and efficient completion process. By standardizing tasks and facilitating the flow of information, Task Daddy helps your team adopt best practices and achieve optimal results. Our centralized platform offers checklists, task libraries, and status updates, serving as the definitive resource for managing your projects. Say goodbye to confusion and wasted time — Task Daddy ensures that everyone on your team understands their responsibilities, boosting morale and eliminating the need for tedious meetings. With built-in separation of duties and robust internal controls, you can confidently assign and manage tasks, preventing bottlenecks and ensuring seamless collaboration. And when integrated with other tools in the Task Daddy suite, automation and system-prepared tasks simplify your workflow, making task management a breeze. Say hello to efficiency and success with Task Daddy.
            </p>
          </div>
        </div>
      </section>

      {/* Top 3 Features Section */}
      <section className="container d-flex justify-content-center" id="features">
        <div className="row justify-content-between" id="features-container">
          {/* Features Column */}
          <div className="col-lg-12 mb-4" id="top-features-container">
            <h2 className="features mb-4">Top Features</h2>
            {/* Feature 1 */}
            <div className="card mb-4">
              <div className="card-body text-center">
                <i className="far fa-clock fa-3x mb-3"></i>
                <p className="card-text">Minimize meeting duration times</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card mb-4">
              <div className="card-body text-center">
                <i className="fas fa-tasks fa-3x mb-3"></i>
                <p className="card-text">Ongoing tracking of task progress and deadlines</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card mb-4">
              <div className="card-body text-center">
                <i className="fas fa-clipboard-check fa-3x mb-3"></i>
                <p className="card-text">Ensuring adherence to company standards and rules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Column */}
      <section className="container-fluid pt-5" id="rec">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="box" id="recognition-box">
              <h2 className="awards mb-4">TASK DADDY being recognized by the best</h2>
              <div className="row mb-4">
                <div className="col-md-12 text-center mb-md-0 mb-3" id="recognition-container">
                  <img src="./static/images/group_awards.png" className="img-fluid wider-award" alt="Award Image" id="award-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container d-flex flex-direction-row flex-wrap justify-content-center testimonial">
        <div className="row justify-content-between">
          <div className="col-lg-12">
            <img src="./static/images/blurb.png" className="img-fluid" id="blurb-img" alt="blurb from customer" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <a href="/reviews" className="btn custom-btn">Reviews</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer">
          <div className="row justify-content-between">
            <div className="col-md-4 mt-3">
              <h5 className="text">Contact Us</h5>
              <ul className="list-unstyled">
                <li><a href="mailto:info@taskdaddy.com" className="accent-text">info@taskdaddy.com</a></li>
                <li><a href="tel:+1234567890" className="accent-text">+1 234 567 8901</a></li>
                <li><a href="#" className="accent-text">123 Task Daddy Way</a></li>
                <li><a href="#" className="accent-text">New York, NY 10001</a></li>
              </ul>
            </div>
            <div className="col-md-4 my-3">
              <img src="./static/images/task_daddy_logo-transparent.gif" alt="Footer Image" className="img-fluid" />
            </div>
            <div className="col-md-4 mt-3 justify-content-end">
              <h5 className="text">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/privacy_policy" className="accent-text">Privacy Policy</a></li>
                <li><a href="/terms_of_use" className="accent-text">Terms of Use</a></li>
                <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="accent">Your go-to task management and to-do list solution.</p>
            </div>
          </div>
        </div>
        <div className="text-center p-3" id="copy-banner">
          &copy; 2024 TaskDaddy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
