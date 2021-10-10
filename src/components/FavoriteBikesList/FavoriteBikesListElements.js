import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    /* border: 1px solid black; */
`

export const FavoriteBikesListContainer = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 1.5em;
    justify-self: center;
`

export const FavoriteBikesH1 = styled.h1`
    font-size: 2rem;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`
