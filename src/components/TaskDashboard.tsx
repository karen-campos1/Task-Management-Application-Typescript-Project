import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/dashboard-styles.css';

const TaskDashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container my-2">
        <h1 className="display-5 text-center">Dashboard</h1>
        <section className="container row col-12 rounded p-3 m-5" id="priority">
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
        </section>
        <section className="container-fluid row m-4">
          <div className="col-md-4 mb-4 p-6 taskmenu" style={{ width: '18rem' }}>
            <div className="card-header text-center">
              <h2>Tasks</h2>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Quarterly Budget </a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Launch New Website</a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Overview Project</a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Employee Reviews</a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Full Staff Meeting Agenda</a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Job Posting for New Position</a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">Send Out Memo on PTO</a></li>
              <li className="list-group-item paint"><a href="./task_details.html" className="btn shadow-none btnt">New Client Acquisition Plan</a></li>
            </ul>
          </div>
          <div className="col-md-8 justify-content-around align-content-center calender">
            <table>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TaskDashboard;
