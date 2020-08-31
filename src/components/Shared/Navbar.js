import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo_5 from '../../images/Logo_5.png'
import resume from '../../assets/resume.pdf'
import '../../index.css'


class CustomNavbar extends Component {
    render() {
      return (
        <Navbar class='nav'>
          <Nav>
            <Navbar.Brand href='/'>
              <img class='logo2' src={Logo_5}/>
            </Navbar.Brand>
          </Nav>
          <Nav class='navlinks'>
            <Navbar.Brand class='about' href="about">
              About
            </Navbar.Brand>
            <Navbar.Brand href="experience">
              Experience
            </Navbar.Brand>
            <Navbar.Brand href="work">
              Work
            </Navbar.Brand>
            <Navbar.Brand href="contact">
              Contact
            </Navbar.Brand>
            <Navbar.Brand>
            <a href= {resume} class="btn btn-outline" target='_blank'>Resume</a>
            </Navbar.Brand>
          </Nav>
        </Navbar>
      )
    }
  
}

export default CustomNavbar;