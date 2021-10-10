import React, { useState } from 'react'
import { IconWrapper, Logo, Menu, Nav, NavContainer, NavElement } from './NavElements'
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = ({ toggle }) => {

    return (
        <Nav>
            <Logo to='/'>BIKEAROUND</Logo>
            <IconWrapper>
                <MenuIcon onClick={toggle} fontSize="large"/> 
            </IconWrapper>
            
            <NavContainer>
                
                <NavElement to='/favorites'>Favorites</NavElement>
                <NavElement to='/host'>Become a host</NavElement>
                <NavElement to='/login'>Login</NavElement>
                <NavElement to='/signup'>Signup</NavElement>
            </NavContainer>
            
            
        </Nav>
    )
}

export default Navbar
