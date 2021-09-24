import React from 'react'
import BikeCardList from '../components/BikeCardList'
import styled from 'styled-components'


const Bikes = () => {
    return (
        <BikePageContainer>
            <h1>Bikes</h1>
            <BikeCardList />
        </BikePageContainer>
    )
}

export default Bikes

const BikePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
`