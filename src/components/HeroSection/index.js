import React from 'react'
import { HeroButton, HeroContainer, HeroSubtitle, HeroTitle} from './HeroSectionElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroTitle>Find a bike</HeroTitle>
            <HeroSubtitle>Go for a ride</HeroSubtitle>
            <HeroButton to='/bikes'>Search bikes</HeroButton>
        </HeroContainer>
    )
}

export default HeroSection
