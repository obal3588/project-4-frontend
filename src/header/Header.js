import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import { Navbar,Nav ,Form,FormControl,Button} from "react-bootstrap";


const authenticatedOptions = (
  <React.Fragment>
    <Link className="nav-link d-inline" to="/change-password">Change Password</Link>
    <Link className="nav-link d-inline" to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link className="nav-link d-inline" to="/sign-up">Sign Up</Link>
    <Link className="nav-link d-inline" to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link  className="nav-link d-inline" to="/">Home</Link>
  </React.Fragment>
)



const Header = ({ user }) => (
  <header className="main-header ">
     <React.Fragment>
  <Navbar  variant="light">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">

    <Nav.Link className="meddico"> Meddico Trip</Nav.Link>
    <Nav.Link>  { user && <span>Welcome, {user}</span>}</Nav.Link>
      <Nav.Link>{alwaysOptions}</Nav.Link>
      <Nav.Link>{ user ? authenticatedOptions : unauthenticatedOptions }</Nav.Link>
      <Nav.Link >Team </Nav.Link>
    </Nav>
    
    <Nav>
      <a href="/">
      <img
        alt=""
        src="https://previews.123rf.com/images/alluranet/alluranet1712/alluranet171202730/91795598-disability-care-logo-design-template-vector.jpg"
        width="65"
        height="50" 
      />
      </a>
  </Nav>
    
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  
  </React.Fragment>
    {/* <h1>Meddico Trip, But For Taxis {user}</h1>

    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav> */}
  </header>
)

export default Header;
