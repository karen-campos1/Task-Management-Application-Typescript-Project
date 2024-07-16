import React from 'react';
import '../styles/review-styles.css';

const Reviews: React.FC = () => {
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
                <li className="nav-item"><a className="nav-link" id="nav1" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#" id="login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
                <li className="nav-item"><a className="nav-link" id="nav1" href="/registration">Register</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">
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
                  <p>Not a member? <a href="/registration">Sign up here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="testimonial-heading">
          <h1>What Users Are Saying</h1>
        </div>
      </section>

      {/* Testimonials Box Container */}
      <div className="container-fluid testimonial-box-container">
        {/* BOX 1 */}
        <div className="testimonial-box mx-5 my-5">
          <div className="box-top">
            {/* USER profile */}
            <div className="profile">
              {/* IMAGE icon */}
              <div className="profile-img">
                <img src="/static/images/man-profile-2.png" alt="profile" />
              </div>
              {/* NAME & USERNAME */}
              <div className="name-user">
                <strong>Anthony Brown</strong>
                <span>@quarterback98</span>
              </div>
            </div>
            {/* REVIEW */}
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          {/* COMMENTS */}
          <div className="client-comment">
            <p>"Task Daddy has made my life so much easier. I can’t imagine going back to paper lists."</p>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="testimonial-box mx-5 my-5">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="/static/images/lady-profile.png" alt="profile" />
              </div>
              <div className="name-user">
                <strong>Ashley Mann</strong>
                <span>@ashmann</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>"Task Daddy makes managing tasks a breeze! The intuitive design and helpful reminders have boosted my productivity. Highly recommend!"</p>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="testimonial-box mx-5 my-5">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="/static/images/guy3-profile.png" alt="profile" />
              </div>
              <div className="name-user">
                <strong>Liam Lincoln</strong>
                <span>@lincolnlooks</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>"The interface is user-friendly and the features are exactly what I need to manage my daily tasks efficiently. I love how it allows me to set priorities and deadlines, making sure I never miss anything important. Highly recommended for anyone looking to boost their productivity!"</p>
          </div>
        </div>

        {/* BOX 4 */}
        <div className="testimonial-box mx-5 my-5">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="/static/images/man-profile.png" alt="profile" />
              </div>
              <div className="name-user">
                <strong>David Green</strong>
                <span>@davidg</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>"As an executive, staying organized is crucial, and Task Daddy has been a game-changer for me. I particularly appreciate the layout which ensure that nothing falls through the cracks. Task Daddy has significantly improved my productivity and helped me maintain a seamless workflow. I highly recommend it to professionals looking for a reliable task management solution."</p>
          </div>
        </div>

        {/* BOX 5 */}
        <div className="testimonial-box mx-5 my-5">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="/static/images/mina-profile.png" alt="profile" />
              </div>
              <div className="name-user">
                <strong>Mina Nguyen</strong>
                <span>@babystargazer01</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>"Great app for staying organized. It could use more customization options, but overall, I’m happy with it."</p>
          </div>
        </div>

        {/* BOX 6 */}
        <div className="testimonial-box mx-5 my-5">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="/static/images/guy-profile.png" alt="profile" />
              </div>
              <div className="name-user">
                <strong>Charles Tillman</strong>
                <span>@theman-tillman</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>"Task Daddy has transformed the way I manage my daily tasks! The intuitive interface and seamless user experience make it incredibly easy to stay organized. I love how I can quickly add and prioritize tasks, and the reminders ensure I never miss a deadline. Highly recommend to anyone looking to boost their productivity!"</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
              <img src="/static/images/task_daddy_logo-transparent.gif" alt="Footer Image" className="img-fluid" />
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
};

export default Reviews;
