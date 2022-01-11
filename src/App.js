import React , {useState} from 'react'
import {carContext} from './createContext.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.js"
import LoadJson from './components/LoadJson/LoadJson.js';
import Body from './components/Body/Body'
import Excel from './components/Excel/Excel.js'
import Search from './components/Search/Search.js';
import ShowAllJson from './components/ShowAllJson/ShowAllJson.js';
import BodyTable from './components/BodyTable/BodyTable.js';
import Login from './components/Login/Login.js';
import Test2 from './components/Test/Test2.js';

import data from './test.json'



/* 增加一個 redirect 做登入畫面*/

function App() {
	const [cars, setCars] = useState(data);

	return (
		<Router>
			{<nav>
				<Header />
			</nav>
			}
			<carContext.Provider value={{ cars, setCars }}>
				<Routes>
					<Route path="/" element={<LoadJson />} />
					<Route path="/login" element={<Login />} />
					<Route path="/body" element={<Body />} />
					<Route path="/excel" element={<Excel />} />
					<Route path="/search" element={<Search />} />
					<Route path="/showalljson" element={<ShowAllJson />} />
					<Route path="/test" element={<Test2 />} />
				</Routes>
			</carContext.Provider>
				<hr></hr>

		</Router>
	)

}
export default App;