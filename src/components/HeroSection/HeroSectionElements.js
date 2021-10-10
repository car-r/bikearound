import styled from "styled-components";
import HeroImg from './herobackground.jpg'
import { Link as RouterLink } from 'react-router-dom'

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    height: 40em;
    background: no-repeat center center;
    background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5) ), url(${HeroImg});
    background-size: cover;
    background-color: black;
    width: 100%;
    margin-bottom: 4em;

    @media screen and (max-width: 650px) {
        height: 30em;
    }

    @media screen and (max-width: 400px) {
        height: 25em;
    }
`

export const HeroElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    margin-top: 10em;

    @media screen and (max-width: 650px) {
        margin-top: 7em;
    }

    @media screen and (max-width: 400px) {
        margin-top: 5em;
    }
`

export const HeroTitle = styled.div`

    font-size: 6rem;
    font-weight: bold;
    color: white;

    @media screen and (max-width: 650px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 3rem;
    }
`

export const HeroSubtitle = styled.div`
    font-size: 2.25rem;
    color: white;
    margin-bottom: 2.5em;

    @media screen and (max-width: 650px) {
        font-size: 1.75rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
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
    width: 10em;

    @media screen and (max-width: 650px) {
        font-size: 1rem;
    }
    

    &:hover {
        cursor: pointer;
        background-color: rgba(236, 236, 236, 1)
    }

   
`