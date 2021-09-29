import React, {useContext}  from 'react'
import { Context } from '../../Context'
import BikeCard from '../BikeCard'
import { Container, FavoriteBikesH1, FavoriteBikesListContainer } from './FavoriteBikesListElements'

const FavoriteBikesList = () => {
    const {allBikes} = useContext(Context)

    let filteredBikes = allBikes.filter(bike => bike.isFavorite)

    return (
        <Container>
            <FavoriteBikesH1>My favorites</FavoriteBikesH1>
            <FavoriteBikesListContainer>
                
                {filteredBikes.map((bike) => (
                    <BikeCard key={bike.bikeImage} name={bike.name} numOfRides={bike.numOfRides} bikeImage={bike.bikeImage} dayRate={bike.dayRate} isFavorite={bike.isFavorite} id={bike.id} rating={bike.rating}/>
                ))}
                
            </FavoriteBikesListContainer>
        </Container>
    )
}

export default FavoriteBikesList
