import React, { } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation()
    const handleLogout = () => {
        localStorage.removeItem('token')
    }
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                        <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>

                    </Nav>


                    {
                        localStorage.getItem('token') ?
                            <Nav><Link className={`nav-link ${location.pathname === '/logout' ? 'active' : ''}`} onClick={handleLogout} to='/login'>LogOut</Link></Nav> : <Nav>
                                <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to='/login'>LogIn</Link>
                                <Link className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} to='/signup'>SignUp</Link></Nav>
                    }
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header