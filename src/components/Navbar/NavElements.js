import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu';

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

export const IconWrapper = styled.div`
    display: none;

    @media screen and (max-width: 850px) {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
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

    @media screen and (max-width: 850px) {
        display: none;
    }

`

export const Logo = styled(RouterLink)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    margin-left: 0.75em;
`