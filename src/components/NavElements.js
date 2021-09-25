import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5em;
    align-items: center;
    padding: 1em;
    box-shadow: 0 4px 2px -4px lightgray;
`

export const NavContainer = styled.div`
    display: flex;
    margin-right: 1em;
`

export const NavElement = styled(RouterLink)`
    text-decoration: none;
    color: black;
    margin-right: 2em;

    :nth-last-of-type(1) {
        margin-right: 0;
    }

`

export const Logo = styled(RouterLink)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    // margin-left: 1em;
`