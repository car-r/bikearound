import styled from "styled-components";

export const BikeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20em;
    // border: 1px solid black;
    border-radius: 1em;
    // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    // border: 1px solid black;

`

export const BikeCardDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

export const BikeCardImage = styled.img`
    object-fit: cover;  
    // background-color: lightgray;
    height: 13em;
    width: 100%;
    border-radius: 1em 1em 0 0;
`


export const BikeCardName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.3em;
`

export const BikeCardSublineContainer = styled.div`
    display: flex;
    margin-bottom: 2em;
    font-size: 1em;
`

export const BikeCardRating = styled.div`
    font-weight: normal;
    color: black;
`

export const BikeCardTrips = styled.div`
    padding-left: 0.25em;
    font-weight: normal;
`

export const BikeCardBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
`



export const BikeCardDayRate = styled.div`
    font-size: 1rem;
    font-weight: bold;
    align-self: flex-end;
`