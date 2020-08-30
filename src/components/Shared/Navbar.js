import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link , Router } from 'react-router-dom';
import Logo_5 from '../../images/Logo_5.png'
import resume from '../../assets/resume.pdf'
import '../../index.css'


class Nav extends Component {
    render() {
      return (
        <Navbar class='nav'>
          <a href='/'>
            <img class='logo2' src={Logo_5}/>
          </a>
          <div class='navlinks'>
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
          <a href= {resume} class="btn btn-outline" target='_blank'>Resume</a>
          </div>
        </Navbar>
      )
    }
  
}

export default Nav;