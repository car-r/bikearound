import React from 'react'
import { HostBikeContainer, HostBikeContentContainer, HostBikeImage,  HostHeading, HostSubHeading, LearnMoreBtn } from './HostBikeElements'

const HostBike = () => {
    return (
        <HostBikeContainer>
            <HostBikeContentContainer>
                <HostHeading>Host your bike</HostHeading>
                <HostSubHeading>Earn income from your bike to put towards new toys and more adventures</HostSubHeading>
                <LearnMoreBtn>Learn More</LearnMoreBtn>
            </HostBikeContentContainer>
            <HostBikeImage />
        </HostBikeContainer>
    )
}

export default HostBike
