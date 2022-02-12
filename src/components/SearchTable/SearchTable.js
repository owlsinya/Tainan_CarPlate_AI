import React, { useContext } from 'react'
import { carContext } from '../../createContext'
import Search from '../Search/Search';
import ShowAllJson from '../ShowAllJson/ShowAllJson';
import 'bootstrap/dist/css/bootstrap.min.css';



const SearchTable = () => {
  const { cars, setCars } = useContext(carContext);

  return (
    <div>
      <div>
        <Search />
        <ShowAllJson />
        {console.log({ cars })}
      </div>
    </div>
  )
}

export default SearchTable

