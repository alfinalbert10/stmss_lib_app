
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./dashbord.css";
import { useLocation } from "react-router-dom";
import HomeAd from "./HomeAd";
import Books from './books';
import Issue from './issue';
import Return from './return';
import Teacher from './Teacher.js';
import Log from './log.js';
import AddBook from './Addbook.js';
import AddTh from "./Addteacher.js";
import AddStd from "./AddStudent.js";
// import Editbk from './Editbook.js';
import Student from './Students.js';
import AdminPro from "./Adminprof.js";
import AddCat from './Addcat.js';
import AddExbk from "./Addexbk.js";
import Login from "./Login.js";
import Track from "./track.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faTasks, faRedo, faChalkboardTeacher, faUserGraduate, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Sidebar = () => {
  const location = useLocation();
  return (
    <div style={{ display: "flex" }}>
      <div
        className="sidebars"
        style={{
          height: "611px",
          width: "300px",
          border: "2px solid white",
        }}
      >
        <NavLink className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="fs-4">ADMIN PANEL</span>
        </NavLink>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            
              <NavLink id="nav-link" aria-current="page" to="/home">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faHome} /> Home
                </button> 
              </NavLink>
          
          </li>
          <br></br>
          <li className="nav-item">
      
              <NavLink id="nav-link" to="/books">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faBook} /> Books
                </button>
              </NavLink>
         
          </li>
          <br></br>
          <li className="nav-item">
         
              <NavLink id="nav-link" to="/issue">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faTasks} /> Issue
                </button>
              </NavLink>
     
          </li>
          <br></br>
          <li className="nav-item">
            
              <NavLink id="nav-link" to="/return">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faRedo} /> Return
                </button>
              </NavLink>
         
          </li>
          <br></br>
          <li className="nav-item">
              <NavLink id="nav-link" to="/teachers">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faChalkboardTeacher} /> Teachers
                </button>
              </NavLink>
          </li>
          <br></br>
          <li className="nav-item">
       
              <NavLink id="nav-link" to="/students">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faUserGraduate} /> Students
                </button>
              </NavLink>
        
          </li>
          <br></br>
          <li className="nav-item">
        
              <NavLink id="nav-link" to="/log">
              <button className="dashbord-button" id="nav-link">
              <FontAwesomeIcon icon={faFileAlt} /> Log
                </button>
              </NavLink>
     
          </li>
        </ul>
      </div>

      <div style={{ width: "100%" }}>

        {location.pathname === "/home" && <Home />}
         {location.pathname === "/books" && <Books/>} 
         {location.pathname === "/issue" && <Issue/>} 
         {location.pathname === "/return" && <Return/>} 
         {location.pathname === "/teachers" && <Teacher/>} 
         {location.pathname === "/students" && <Student/>} 
         {location.pathname === "/log" && <Log/>} 
         {location.pathname === "/addbooks" && <AddBook/>} 
         {location.pathname === "/addteacher" && <AddTh/>} 
         {location.pathname === "/addstudents" && <AddStd/>} 
         {/* {location.pathname === "/editbook" && <Editbk/>}  */}
         {location.pathname === "/adminprof" && <AdminPro/>} 
         {location.pathname === "/addcat" && <AddCat/>} 
         {location.pathname === "/addexbk" && <AddExbk/>} 
         {location.pathname === "/login" && <Login/>} 
         {location.pathname === "/track" && <Track/>} 
      </div>
    </div>
  );
};


const Home = () => {
  const [stat, setStat] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    fetch("https://sunday-library.onrender.com/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        setStat(data.data);
        setIsLoading(false);
        console.log(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>  
      </div>
    );
  }

  
  return (
    <div class="grid-container">
      <div class="grid-item">
        <HomeAd  cardTitle={"No of Students"} cardName={stat.student_count}  isLoading={isLoading}/>
      </div>
      <div class="grid-item">
        <HomeAd cardTitle={"No of Teachers"} cardName={stat.teacher_count}  isLoading={isLoading}/>
      </div>
      <div class="grid-item">
        <HomeAd cardTitle={"No of Books"} cardName={stat.total_book_count}  isLoading={isLoading}/>
      </div>
      <div class="grid-item">
        <HomeAd cardTitle={"Issued Books"} cardName={stat.issued_book_count}  isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Sidebar;


