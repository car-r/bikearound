import React, {useState, useEffect} from 'react'
import { BikeCardData } from './components/BikeCardList/BikeCardData'

const Context = React.createContext()


function ContextProvider({children}) {
    const [allBikes, setAllBikes] = useState([])

    useEffect(() => {
        setAllBikes(BikeCardData)
    }, [])
    console.log(allBikes)

    function toggleFavorite(id) {
        const updatedBikes = allBikes.map(bike => {
            if (bike.id === id) {
                return {...bike, isFavorite: !bike.isFavorite}
            }
            return bike
        })
        setAllBikes(updatedBikes)
    }


    return (
        <Context.Provider value={{allBikes, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}