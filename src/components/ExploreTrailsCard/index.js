import React from 'react'
import { ExploreTailsCardContainer, ExploreTrailsCardDataContainer, ExploreTrailsCardDifficulty, ExploreTrailsCardTrail, ExploreTrailsCardImage } from './ExploreTrailsCardElements'

const ExploreTrailsCard = ({trail, difficulty, image}) => {
    return (
        <ExploreTailsCardContainer>
            <ExploreTrailsCardImage src={image}/>
            <ExploreTrailsCardDataContainer>
                <ExploreTrailsCardTrail>{trail}</ExploreTrailsCardTrail>
                <ExploreTrailsCardDifficulty>{difficulty}</ExploreTrailsCardDifficulty>
            </ExploreTrailsCardDataContainer>
        </ExploreTailsCardContainer>
    )
}

export default ExploreTrailsCard