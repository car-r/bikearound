import styled from "styled-components";

export const HostBikeContainer = styled.div`
    display: flex;
    width: 95%;
    margin: 0 auto;
    background-size: cover;
    height: 30em;
    border-radius: 1em;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 650px) {
        display: flex;
        flex-direction: column;
    }
`

export const HostBikeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
`


export const HostBikeImage = styled.img`
    object-fit: cover;
    background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3) ), url("https://images.unsplash.com/photo-1437915015400-137312b61975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
    width: 50%;
    border-radius: 1em;
    height: auto;
`

export const HostHeading = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1em;
`

export const HostSubHeading = styled.div`
    font-size: 1.5rem;
    width: 75%;
    text-align: center;
    margin-bottom: 1.5em;
`

export const LearnMoreBtn = styled.button`
    display: inline;
    padding: 0.75em 2em;
    border-radius: 50px;
    background: black;
    border: none;
    font-size: 1.25rem;
    color: white;
    width: 10em;

    &:hover {
        cursor: pointer;
        
    }
`