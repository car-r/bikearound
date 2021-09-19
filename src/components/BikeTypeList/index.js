import React from 'react'
import BikeTypeCard from '../BikeTypeCard'
import { BikeTypeListContainer } from './BikeTypeListElements'
import { bikeTypeDataList } from './BikeTypeData'

const BikeTypeList = () => {
    return (
        <BikeTypeListContainer>
            {bikeTypeDataList.map((bike) => (
                <BikeTypeCard key={bike.image} title={bike.title} image={bike.image}/>
            ))}
        </BikeTypeListContainer>
    )
}

console.log(bikeTypeDataList)

export default BikeTypeList
