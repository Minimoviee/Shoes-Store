import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import './NavBar.css';

export class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" className="justify-content-between">
                <Navbar.Brand>
                    <Link to="/" className="NavBar-l2-color"> 
                        Simple Checkout Website
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="mr-auto" />
                    
                    <Nav>
                        <Form inline >
                            <Link to="/checkout" className=" nav-link mr-4">
                                <div className="NavBar-l2-color">
                                    Checkout</div>
                            </Link>
                        </Form>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
