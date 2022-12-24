import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom'
import Navbar  from 'react-bootstrap/Navbar';

function Nav() {

  return (
    <nav>

<Navbar bg='dark' expand="lg" variant='light' className='nav'>
 <NavbarToggle aria-controls='basic-navbar-nav' />
    <NavbarCollapse id='basic-navbar-nav' /> 
    <Link to='/'>Home</Link>
    <Link to='/pricing'>Pricing</Link>
    <Link to='/contact'>Contact Me</Link>
  
</Navbar>
    </nav>
    )
}

export default Nav