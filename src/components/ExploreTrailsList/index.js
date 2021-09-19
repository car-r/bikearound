import React from 'react'
import ExploreTrailsCard from '../ExploreTrailsCard'
import { ExploreTrailsListContainer } from './ExploreTrailsListElements'
import { ExploreTrailsData } from './ExploreTrailsListData'

const ExploreTrailsList = () => {
    return (
        <ExploreTrailsListContainer>
            {
                ExploreTrailsData.map((trail) => (
                    <ExploreTrailsCard key={trail.image} image={trail.image} trail={trail.trail} difficulty={trail.difficulty}/>
                ))
            }
        </ExploreTrailsListContainer>
    )
}

export default ExploreTrailsList
