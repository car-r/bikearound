import styled from "styled-components";
import HeroImg from './herobackground.jpg'
import { Link as RouterLink } from 'react-router-dom'

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45em;
    background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5) ), url(${HeroImg});
    background-size: cover;
    background-color: black;
    // text-align: center;
    margin-bottom: 4em;
`

export const HeroTitle = styled.div`
    font-size: 6rem;
    font-weight: bold;
    color: white;
`

export const HeroSubtitle = styled.div`
    font-size: 2.25rem;
    color: white;
    margin-bottom: 0.5em;
`

export const HeroButton = styled(RouterLink)`
    display: inline;
    padding: 0.75em 2em;
    border-radius: 50px;
    background: white;
    border: none;
    font-size: 1.25rem;
    text-decoration: none;
    color: black;

    &:hover {
        cursor: pointer;
        background-color: rgba(236, 236, 236, 1)
    }
   
`