import React, { useState } from 'react';
import '../styles/registration-styles.css';

const Registration: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password1: '',
    cardName: '',
    creditCard: '',
    expirationDate: '',
    secCode: '',
    address: '',
    zipCode: '',
    state: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and submission logic here
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
                <li className="nav-item"><a className="nav-link" id="nav1" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#" id="login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
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

      <div className="container-fluid p-0" id="photo">
        <img src="./static/images/register-banner.gif" alt="Header gif" className="img-fluid w-100" />
      </div>

      <main className="container my-2">
        <h1 className="display-5 text-center register">Register</h1>
        <div className="dropdown-divider bg-info my-1"></div>
        <form onSubmit={handleSubmit} className="row g-3 p-4 was-validated registration-form" noValidate>
          <div className="form-floating col-12 mb-3 validation-field">
            <input type="text" className="form-control validation-icon" id="name" name="name" pattern="[a-zA-Z]+ [a-zA-Z]+" placeholder="Frank Luckersten" value={formValues.name} onChange={handleChange} required />
            <label htmlFor="name">Full Name</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter your full name</div>
          </div>
          <div className="form-floating col-12 col-md-6 mb-3">
            <input type="email" className="form-control" id="email" name="email" pattern="[\w]+@[\w]+[.][a-z]{2,3}" placeholder="name@example.com" value={formValues.email} onChange={handleChange} required />
            <label htmlFor="email">Email</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a valid email</div>
          </div>
          <div className="form-floating col-12 col-md-6 mb-3">
            <input type="tel" className="form-control" id="phone" name="phone" pattern="[\d]{3} [\d]{3} [\d]{4}" placeholder="281 867 5309" value={formValues.phone} onChange={handleChange} required />
            <label htmlFor="phone">Phone Number</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a 10 digit phone number e.g.281 867 5309</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" autoComplete="off" pattern="[\w].*" value={formValues.password} onChange={handleChange} required />
            <label htmlFor="password">Password</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a password</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="password" className="form-control" id="password1" name="password1" placeholder="Re-Enter your password" autoComplete="off" pattern=".password" value={formValues.password1} onChange={handleChange} required />
            <label htmlFor="password">Password</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a password</div>
          </div>
          <div className="form-floating mb-3 form">
            <h5 className="text-center terms">Terms & Conditions</h5>
            <iframe className="col-12 mb-3" id="pdf" src="./static/images/TASKDADDY.pdf"></iframe>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="text" className="form-control" id="cardName" name="cardName" pattern="[a-zA-Z]+ [a-zA-Z]+" placeholder="Frank Luckersten" value={formValues.cardName} onChange={handleChange} required />
            <label htmlFor="cardName">Name as it appears on card.</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Name does not match.</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="text" className="form-control" id="creditCard" name="creditCard" pattern="[\d]{4} [\d]{4} [\d]{4} [\d]{4}" placeholder="1234 5678 9012 3456" value={formValues.creditCard} onChange={handleChange} required />
            <label htmlFor="creditCard">Credit Card Number</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a valid credit card</div>
          </div>
          <div className="form-floating col-12 col-md-6 mb-3">
            <input type="text" className="form-control" id="expirationDate" name="expirationDate" pattern="[\d]{1}/[\d]{2}" placeholder="1/29" value={formValues.expirationDate} onChange={handleChange} required />
            <label htmlFor="expirationDate">Expiration Date</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a valid date</div>
          </div>
          <div className="form-floating col-12 col-md-6 mb-3">
            <input type="text" className="form-control" id="secCode" name="secCode" pattern="[\d]{3}" placeholder="985" value={formValues.secCode} onChange={handleChange} required />
            <label htmlFor="secCode">Security Code</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter Sec-Code</div>
          </div>
          <div className="form-floating col-12 mb-3">
            <input type="text" className="form-control" id="address" name="address" pattern="[\d]+ [a-zA-Z]+ [/w]" placeholder="Frank Luckersten" value={formValues.address} onChange={handleChange} required />
            <label htmlFor="address">Billing Address.</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Invalid address</div>
          </div>
          <div className="form-floating col-12 col-md-6 mb-3">
            <input type="text" className="form-control" id="zipCode" name="zipCode" pattern="[\d]{5}" placeholder="1/29" value={formValues.zipCode} onChange={handleChange} required />
            <label htmlFor="zipCode">Zip Code</label>
            <div className="valid-feedback">Correct</div>
            <div className="invalid-feedback">Please enter a valid zip code</div>
          </div>
          <div className="form-floating col-12 col-md-6 mb-3">
            <label htmlFor="validationDefault04" className="form-label"></label>
            <select className="form-select" id="validationDefault04" name="state" value={formValues.state} onChange={handleChange} required style={{ borderColor: '#b6edfa' }}>
              <option selected disabled value="">State</option>
              {/* Add all state options here */}
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btnr">Register</button>
          </div>
        </form>
      </main>

      <footer className="footer">
        <div className="container-fluid footer">
          <div className="row justify-content-between">
            <div className="col-md-4 mt-3">
              <h5>Contact Us</h5>
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
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="privacy_policy.html" className="accent-text">Privacy Policy</a></li>
                <li><a href="terms_of_use.html" className="accent-text">Terms of Use</a></li>
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

export default Registration;
