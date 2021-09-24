import React from 'react'
import { BikeCardContainer, BikeCardDataContainer, BikeCardDayRate, BikeCardImage, BikeCardName, BikeCardRating, BikeCardSublineContainer, BikeCardTrips } from './BikeCardElements'

const BikeCard = ({name, rating, numOfRides, dayRate, bikeImage}) => {
    return (
        <BikeCardContainer>
            <BikeCardImage src={bikeImage}/>
            <BikeCardDataContainer>
                <BikeCardName>{name}</BikeCardName>
                <BikeCardSublineContainer>
                    <BikeCardRating>{rating}</BikeCardRating>
                    <BikeCardTrips>({numOfRides} rides)</BikeCardTrips>
                </BikeCardSublineContainer>
                <BikeCardDayRate>{dayRate}/day</BikeCardDayRate>
            </BikeCardDataContainer>
        </BikeCardContainer>
    )
}

export default BikeCard
