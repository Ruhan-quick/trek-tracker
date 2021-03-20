import { Button } from "@material-ui/core";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="container">
        <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="row">
          <Nav className="mr-auto" className="col-lg-6 col-sm-12 ml-auto">
            <Nav.Link href="home" className="mx-auto">
              Home
            </Nav.Link>
            <Nav.Link href="destination" className="mx-auto">
              Destination
            </Nav.Link>
            <Nav.Link href="blog" className="mx-auto">
              Blog
            </Nav.Link>
            <Nav.Link href="contact" className="mx-auto">
              Contact
            </Nav.Link>

            <Button
              href="login"
              variant="contained"
              color="secondary"
              className="mx-auto"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
