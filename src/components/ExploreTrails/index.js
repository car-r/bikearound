import React from 'react'
import ExploreTrailsList from '../ExploreTrailsList'
import { ExploreTrailsContainer, ExploreTrailsHeading } from './ExploreTrailsElements'

const ExploreRides = () => {
    return (
        <ExploreTrailsContainer>
            <ExploreTrailsHeading>Explore trails</ExploreTrailsHeading>
            
            <ExploreTrailsList />
        </ExploreTrailsContainer>
    )
}

export default ExploreRides
