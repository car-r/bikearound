import React from 'react'
import BikeCardList from '../components/BikeCardList'
import styled from 'styled-components'


const Bikes = () => {
    return (
        <BikePageContainer>
            <Header>Bikes for rent</Header>
            <BikeCardList />
        </BikePageContainer>
    )
}

export default Bikes

const BikePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 2em;
`

const Header = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5em;
`