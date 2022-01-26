import React, { useState } from 'react'
import { carContext } from './createContext.js';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js"
import LoadJson from './components/LoadJson/LoadJson.js';

import Excel from './components/Excel/Excel.js'
import Search from './components/Search/Search.js';
import ShowAllJson from './components/ShowAllJson/ShowAllJson.js';
import Login from './components/Login/Login.js';
import Test from './components/Test/Test'

import data from './test.json'





function App() {

	const [cars, setCars] = useState(data);
	
	return (
		/*<div id='container'>*/

			<Router>
				{/*<div className='header'>*/}
				<div>
					{<nav>
						<Header />
					</nav>
					}
				</div>
				{/*<div className='content'>*/}
				<div>
				<carContext.Provider value={{ cars, setCars }}>
						<Routes>
							<Route path="/" element={<LoadJson />} />
							<Route path="/login" element={<Login />} />
							<Route path="/search" element={<Search />} />

							<Route path="/excel" element={<Excel />} />
							<Route path="/showallsearchjson" element={<ShowAllJson />} />
							<Route path="/test" element={<Test />} />
						</Routes>
				</carContext.Provider>
				</div>
			</Router>
	)

}
export default App;