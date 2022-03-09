import React, {useState} from 'react'
import { Offcanvas, Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <div>

    {/* <LinkContainer to='/about'>
      <Nav.Link>About</Nav.Link>
      </LinkContainer> */}
    <Navbar bg="black" variant="dark" expand={false}>
    <Container fluid>
    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    //   show={show} 
    //   onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        {/* <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>

        <Nav className="justify-content-end flex-grow-1 pe-3">

            <LinkContainer to='/'>
                <Nav.Link className="linkText"><h3>Home</h3></Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/about'>
                <Nav.Link className="linkText"><h3>About</h3></Nav.Link>
            </LinkContainer>
            
          {/* <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>

      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

    </div>
  )
}

export default Header