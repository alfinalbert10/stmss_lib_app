// src/App.js
import React from 'react';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
 import Login from "./Login"
// import Nav from "./Navs";
import './homead.css';
 import HomeAd from './HomeAd';
// import Dashbord from "./dashbord";

function App() {
  return (
    <BrowserRouter>
  <Layout>
    <Routes>
    <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomeAd />} />
      {/* <Route path="/books" element={<Books />} /> */}
      {/* ... other routes */}
    </Routes>
  </Layout>
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
 

