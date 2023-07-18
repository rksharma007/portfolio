import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/rk-logo-01.svg";

const NavbarMain = () => {

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{fontSize: '18px'}}>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <i className="fa fa-home" style={{ marginBottom: "2px", color: 'var(--my-tertiary-color)'}} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <i className="fa fa-user" style={{ marginBottom: "2px", color: 'var(--my-tertiary-color)'}} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <i className="fa fa-folder" style={{ marginBottom: "2px", color: 'var(--my-tertiary-color)' }}/>{" "}Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="button type1">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <i className="fa fa-file" style={{ marginBottom: "2px", color: 'var(--my-tertiary-color)'}} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <i className="fa-regular envelope" style={{ marginBottom: "2px", color: 'var(--my-tertiary-color)'}} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/rksharma007/"
                target="_blank"
                className="fork-btn-inner"
              >
                <i className="fa-brands fa-github" style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarMain;
