import React, { useState } from 'react'
import { carContext } from './createContext.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoadJson from './components/LoadJson/LoadJson.js';
import Body from './components/Body/Body'
import Excel from './components/Excel/Excel.js'
import Search from './components/Search/Search.js';
import ShowAllJson from './components/ShowAllJson/ShowAllJson.js';
import Login from './components/Login/Login.js';

import data from './test.json'
import SearchTable from './components/SearchTable/SearchTable.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import './App.css';


/* 增加一個 redirect 做登入畫面*/

function App() {
	const [cars, setCars] = useState(data);

	return (
		<Router>
			{<nav>
				<Sidebar />
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
				</Routes>
			</carContext.Provider>
			<hr></hr>


		</Router>
	)

}
export default App;