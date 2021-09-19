import React from 'react'
import { BikeTypeCardContainer, BikeTypeCardImage, BikeTypeCardTitle } from './BikeTypeCardElements'


const BikeTypeCard = ({title, image}) => {
    return (
        <BikeTypeCardContainer>
            <BikeTypeCardImage src={image}/>
            <BikeTypeCardTitle>{title}</BikeTypeCardTitle>
        </BikeTypeCardContainer>
    )
}

export default BikeTypeCard
