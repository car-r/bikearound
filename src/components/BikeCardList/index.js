import React, {useContext} from 'react'
import { Context } from '../../Context'
import { BikeCardListContainer} from './BikeCardListElements'
import BikeCard from '../BikeCard'
// import { BikeCardData } from './BikeCardData'

const BikeCardList = () => {
    const {allBikes} = useContext(Context)

    return (
        <>

            <BikeCardListContainer>
                {allBikes.map((bike) => (
                    <BikeCard key={bike.bikeImage} name={bike.name} numOfRides={bike.numOfRides} bikeImage={bike.bikeImage} dayRate={bike.dayRate} isFavorite={bike.isFavorite} id={bike.id} rating={bike.rating}/>
                ))}
            </BikeCardListContainer>
        </>
    )
}

export default BikeCardList
