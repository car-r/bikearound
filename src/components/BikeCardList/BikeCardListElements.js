import styled from "styled-components";

export const BikeCardListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: auto;
    // justify-content: space-between;
    gap: 2em;
    margin: 0 auto;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media (max-width: 710px) {
        grid-template-columns: 1fr
    }

`


