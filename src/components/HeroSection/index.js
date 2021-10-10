import React from 'react'
import { HeroButton, HeroContainer, HeroElementsContainer, HeroSubtitle, HeroTitle} from './HeroSectionElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroElementsContainer>
                <HeroTitle>Find a bike</HeroTitle>
                <HeroSubtitle>Go for a ride and take the path less traveled</HeroSubtitle>
                <HeroButton to='/bikes'>Search bikes</HeroButton>
            </HeroElementsContainer>
            
        </HeroContainer>
    )
}

export default HeroSection
