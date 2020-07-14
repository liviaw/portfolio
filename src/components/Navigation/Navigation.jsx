import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.gif';
import liv from '../../images/liv.png';
import {Nav, Navbar, NavDropdown} from  'react-bootstrap';
import {Layout} from '../Layout';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

import './Navigation.css';

function Navigation () {
    return (
        <div className="navDiv">
            <Container>
            <a href="/"><img className="logo" src={logo} alt="logo"/></a>
            <Navbar expand="lg" defaultExpanded>
            
            <Navbar.Brand href="/"></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                {/* <Nav className="ml-auto"> */}
                <Nav className="m-auto" >
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/experiment">Experiment</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/resume">Resume</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
            </Container>
        </div>
    )

}

export default Navigation;