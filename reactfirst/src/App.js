// src/App.js
import React from 'react';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Login from "./Login";
import Home from './HomeAd';
import Book from './books.js';
import Teacher from './Teacher.js';
import Student from './Students.js';
import AddStd from './AddStudent.js';
import AdminPro from './Adminprof.js';
import Issue from './issue';
import Return from './return.js';
// import Teacher from './Teacher.js';
// import Student from './Students.js';
import Log from './log';
import AddBook from './Addbook.js';
import AddTh from './Addteacher.js';
// import AddStd from './AddStudent.js';
// import Editbk from './Editbook.js';
// import AdminPro from './Adminprof.js';
import AddCat from './Addcat.js';
import AddExbk from './Addexbk.js';
import Track from './track.js';
import ReactDOM from "react-dom";

function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/books" element={<Layout><Book /></Layout>} />
      <Route path="/issue" element={<Layout><Issue /></Layout>} />
      <Route path="/return" element={<Layout><Return /></Layout>} />
      <Route path="/teachers" element={<Layout><Teacher /></Layout>} />
      <Route path="/students" element={<Layout><Student /></Layout>} />
      <Route path="/log" element={<Layout><Log /></Layout>} />
      <Route path="/addbooks" element={<Layout><AddBook /></Layout>} />
      <Route path="/addteacher" element={<Layout><AddTh /></Layout>} />
      <Route path="/addstudents" element={<Layout><AddStd /></Layout>} />
      <Route path="/adminprof" element={<Layout><AdminPro /></Layout>} />
      <Route path="/addcat" element={<Layout><AddCat /></Layout>} />
      <Route path="/addexbk" element={<Layout><AddExbk /></Layout>} />
      <Route path="/track" element={<Layout><Track /></Layout>} />
    </Routes>

</BrowserRouter>
  );
}

export default App;

// function Books(){
//   return <h1>books retumeed</h1>
// }

// function HomeAd(){
//   return (
//     <div className="centered-card-container">
//          <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
      
//     </div>
//   );
// }
 

