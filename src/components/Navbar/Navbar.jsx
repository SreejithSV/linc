import React, { useState } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo/logo.png';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  // Close navbar on any nav item click
  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className="custom-navbar sticky-top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)} // sync state with toggler
    >
      <Container>
        <BootstrapNavbar.Brand as="a" href="#home" className="navbar-brand" style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Linc Home Solutions" className="navbar-logo" />
          <span className="navbar-brand-text">Linc Home Solutions</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar-nav align-items-center">
            <a className="nav-link" href="/#how-it-works" onClick={handleNavClick}>How It Works</a>
            <Link className="nav-link" to="/help" onClick={handleNavClick}>Who We Help</Link>
            <a className="nav-link" href="/#why-choose-us" onClick={handleNavClick}>Why Choose Us</a>
            <a className="nav-link" href="/#testimonials" onClick={handleNavClick}>Testimonials</a>
            <Link className="nav-link" to="/about" onClick={handleNavClick}>About Us</Link>
            <a className="nav-link" href="/#faq" onClick={handleNavClick}>FAQ</a>
            <Button
              href="/#offer"
              onClick={handleNavClick}
              style={{
                backgroundColor: '#3599db',
                color: 'white',
                fontWeight: 600,
                padding: '0.5rem 1.25rem',
                border: 'none',
                borderRadius: '50px',
                transition: 'background-color 0.3s ease',
              }}
            >
              Get Cash Offer
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
