import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navss.css';
import { NavLink } from 'react-router-dom';

function Homefunction() {
  return (
    <Navbar expand="lg"  id='bd'>
      <Container id='cont'>
      <div id="profile" className="d-flex align-items-center">
              
              <img
                src="https://i.ibb.co/WyFBnhS/sundaylogo.jpg"
                alt=""
                style={{ borderRadius: "100%", height: "50px", width: "50px" }}
              />
            
            </div>
        <Navbar.Brand href="#home" id="brand">
      
          St Mary's Sunday School Library
        </Navbar.Brand>
          <Nav className="me-auto">
            
            
          </Nav>
       
      </Container>
    </Navbar>
    
  );

}

export default Homefunction;