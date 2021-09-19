import React from 'react'
import BikeTypeList from '../BikeTypeList'
import { BikeTypeContainer, BikeTypeHeading } from './BikeTypeElements'

const BikeType = () => {
    return (
        <BikeTypeContainer>
            <BikeTypeHeading>Ride your favorites</BikeTypeHeading>
            <BikeTypeList />
        </BikeTypeContainer>
    )
}

export default BikeType
