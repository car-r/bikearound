import React from 'react'
import { Logo, Nav, NavContainer, NavElement } from '../NavElements'

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>BIKEAROUND</Logo>
            <NavContainer>
                <NavElement to='/host'>Become a host</NavElement>
                <NavElement to='/login'>Login</NavElement>
                <NavElement to='/signup'>Signup</NavElement>
            </NavContainer>
            
        </Nav>
    )
}

export default Navbar
