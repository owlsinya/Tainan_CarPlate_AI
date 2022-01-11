import React, { useContext } from 'react'
import {carContext} from '../../createContext'

const Test = () => {
    const {cars , setCars} = useContext(carContext);

    return (
        <div>
            {console.log({cars})}
        
        </div>
    )
}
export default Test

