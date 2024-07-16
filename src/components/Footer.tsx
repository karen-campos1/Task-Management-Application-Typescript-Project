import React from 'react';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
