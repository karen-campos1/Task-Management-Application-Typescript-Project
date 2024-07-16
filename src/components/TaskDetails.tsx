import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/task-details-styles.css';

const TaskDetails: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container-fluid">
        <div className="container row col-12 rounded p-3 m-5" id="priority">
          <h4 className="ptasks">Priority Tasks</h4>
          <div className="progress ps-0" role="progressbar" aria-label="Quarterly Budget" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar first" style={{ width: '75%' }}>Quarterly Budget</div>
          </div>
          <div className="progress ps-0 my-4" role="progressbar" aria-label="Launch New Website" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar second" style={{ width: '50%' }}>Launch New Website</div>
          </div>
          <div className="progress ps-0" role="progressbar" aria-label="Project 1" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar third" style={{ width: '65%' }}>Overview Project</div>
          </div>
        </div>
        <section className="container d-flex justify-content-center mb-5">
          <div id="carouselExample" className="carousel slide col-6">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card border-rounded cback">
                  <div className="card-header">
                    Task Details
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Quarterly Budget</h5>
                    <p className="card-text">
                      <p><strong>Date Created:</strong> 05/06/2024</p>
                      <p><div className="progress ps-0" role="progressbar" aria-label="Quarterly Budget" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                          <div className="progress-bar first" style={{ width: '75%' }}>Quarterly Budget</div>
                        </div></p>
                      <p><strong>Project Description:</strong> Create a Quarterly budget utilizing information from previous quarters to provide an accurate forecast.</p>
                      <p><strong>Team Members on Project:</strong> Kayla A., Karen C., Chris N.</p>
                      <p><strong>Estimated Date of Completion:</strong> 05/06/2024</p>
                    </p>
                    <div className="col-md-8">
                      <a href="./task_dashboard.html"><button type="submit" className="btn btnc">Complete</button></a>
                      <a href="#"><button type="button" className="btn btne">Edit</button></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional carousel items can go here */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TaskDetails;
