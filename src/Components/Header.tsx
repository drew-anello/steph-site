import React from 'react'
import { Link } from 'react-router-dom'
import  {Navbar, Nav, Container }  from 'react-bootstrap';



function Header() {

  return (

<Navbar bg='dark' expand="lg" variant='light' className='justify-content-center'>
    <Nav>
      <Nav.Link as={Link} to='/' className='text-info'>Home</Nav.Link>
      <Nav.Link as={Link} to='/pricing'className='text-info'>Pricing</Nav.Link>
      <Nav.Link as={Link} to='/contact'className='text-info'>Contact Me</Nav.Link>
 </Nav> 
</Navbar>


    )
}

export default Header