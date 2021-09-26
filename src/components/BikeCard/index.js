import React, { useContext} from 'react'
import { Context } from '../../Context';
import { BikeCardBottomContainer, BikeCardContainer, BikeCardDataContainer, BikeCardDayRate, BikeCardImage, BikeCardName, BikeCardRating, BikeCardSublineContainer, BikeCardTrips } from './BikeCardElements'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';


const BikeCard = ({name, rating, numOfRides, dayRate, bikeImage, isFavorite, id}) => {
    const {toggleFavorite} = useContext(Context)

    function heartIcon() {
        if (isFavorite) {
            return <FavoriteIcon onClick={() => toggleFavorite(id)}/>
        } else {
            return <FavoriteBorderIcon onClick={() => toggleFavorite(id)}/>
        }
    }

    return (
        <BikeCardContainer onClick={() => console.log("clicked")}>
            <BikeCardImage src={bikeImage}/>
            <BikeCardDataContainer>
                <BikeCardName>{name}</BikeCardName>
                <BikeCardSublineContainer>
                    <BikeCardRating>{rating}</BikeCardRating>
                    <StarIcon style={{fontSize: "large"}}/>
                    <BikeCardTrips>({numOfRides} rides)</BikeCardTrips>
                </BikeCardSublineContainer>
                <BikeCardBottomContainer>
                    {heartIcon()}
                    <BikeCardDayRate>{dayRate}/day</BikeCardDayRate>
                </BikeCardBottomContainer>
            </BikeCardDataContainer>
        </BikeCardContainer>
    )
}

export default BikeCard
