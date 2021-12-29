import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js"
import Body from './components/Body/Body'
import Excel from './components/Excel/Excel.js'
import Search from './components/Search/Search.js';
import { BasicTable } from './components/BasicTable/BasicTable.js';
import ShowAllJson from './components/ShowAllJson/ShowAllJson.js';
import BodyTable from './components/BodyTable/BodyTable.js';



function App() {
	return (
		<Router>
			{<nav>
				<Header />
			</nav>
			}
			<Routes>


				<Route path="/basictable" element={<BasicTable />} />
				<Route path="/head" element={<Header />} />
				<Route path="/body" element={<Body />} />
				<Route path="/excel" element={<Excel />} />
				<Route path="/search" element={<Search />} />
				<Route path="/showalljson" element={<ShowAllJson />} />
				<Route path="/bodytable" element={<BodyTable />} />

			</Routes>
			<hr></hr>

		</Router>
	)

}
export default App;