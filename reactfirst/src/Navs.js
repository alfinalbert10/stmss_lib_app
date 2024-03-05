import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navss.css';

function Homefunction() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id='cont'>
        <Navbar.Brand href="#home" id="brand">
          St Mary's Sunday School Library
        </Navbar.Brand>
          <Nav className="me-auto">
            <div id="profile" className="d-flex align-items-center">
              
              <img
                src="https://cdn1.iconfinder.com/data/icons/100-basic-for-user-interface/32/78-user-512.png"
                alt=""
                style={{ borderRadius: "100%", height: "50px", width: "48px", marginRight: "10px" }}
              />
              <Nav.Link href="#link" id="prof">
                Profile
              </Nav.Link>
            </div>
          </Nav>
       
      </Container>
    </Navbar>
    
  );

}

export default Homefunction;