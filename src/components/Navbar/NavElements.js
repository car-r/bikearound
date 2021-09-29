import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5em;
    align-items: center;
    padding: 1em;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    /* box-shadow: 0 2px 2px -2px rgba(0,0,0,.2); */
   
`

export const NavContainer = styled.div`
    display: flex;
    margin-right: 1em;
`

export const NavElement = styled(RouterLink)`
    text-decoration: none;
    color: black;
    margin-right: 1.5em;
    padding: 0.5em 1.25em;
    border-radius: 2em;
    //border: 1px solid black;

    :nth-last-of-type(1) {
        margin-right: 0;
    }

    &:hover {
        background-color: rgba(236, 236, 236, 0.5)
    }

`

export const Logo = styled(RouterLink)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    // margin-left: 1em;
`