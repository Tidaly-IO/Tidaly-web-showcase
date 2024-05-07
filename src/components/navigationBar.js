import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(true);

  // DELETE MAYBE
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY >= 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   }

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <div>
            <h1 className="bold-text" style={{ textShadow: '1px 5px 4px rgba(0, 0, 0, 0.3)'}}>Tidaly</h1>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" ></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Acceuil</Nav.Link>
              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Equipe</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projet</Nav.Link>
              <Nav.Link href="#timeline" className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('timeline')}>Historique</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/nathan-sabourdy-9aa552174" target="_blank"><img src={navIcon1} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contacter</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}