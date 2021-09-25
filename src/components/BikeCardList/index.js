import React from 'react'
import { BikeCardListContainer} from './BikeCardListElements'
import BikeCard from '../BikeCard'
import { BikeCardData } from './BikeCardData'

const BikeCardList = () => {
    return (
        <>
            <BikeCardListContainer>
                {BikeCardData.map((bike) => (
                    <BikeCard key={bike.bikeImage} name={bike.name} numOfRides={bike.numOfRides} bikeImage={bike.bikeImage} dayRate={bike.dayRate}/>
                ))}
            </BikeCardListContainer>
        </>
    )
}

export default BikeCardList
