import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.js"
import LoadJson from './components/LoadJson/LoadJson.js';
import Body from './components/Body/Body'
import Excel from './components/Excel/Excel.js'
import Search from './components/Search/Search.js';
import { BasicTable } from './components/BasicTable/BasicTable.js';
import ShowAllJson from './components/ShowAllJson/ShowAllJson.js';
import BodyTable from './components/BodyTable/BodyTable.js';
import Create from './components/Create/Create.js';
import Output from './components/Create/Output.js';
import Login from './components/Login/Login.js';

/* 增加一個 redirect 做登入畫面*/

function App() {
<<<<<<< HEAD
    return (
        <Router>
            {<nav>
                <Header />
                
            </nav>
            }
            <Routes>
            <Route path="/" element={<LoadJson />} />
            <Route path="/head" element={<Header />} />
            <Route path="/body" element={<Body />} />
            <Route path="/excel" element={<Excel />} />
            <Route path="/search" element={<Search />} />
            <Route path="/showalljson" element={<ShowAllJson/>} />
            <Route path="/bodytable" element={<BodyTable />} />
            </Routes>
            <hr></hr>
=======
	return (
		<Router>
			{<nav>
				<Header />
			</nav>
			}
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/create" element={<Create />} />
				<Route path="/output" element={<Output />} />
				<Route path="/basictable" element={<BasicTable />} />
				<Route path="/head" element={<Header />} />
				<Route path="/body" element={<Body />} />
				<Route path="/excel" element={<Excel />} />
				<Route path="/search" element={<Search />} />
				<Route path="/showalljson" element={<ShowAllJson />} />
				<Route path="/bodytable" element={<BodyTable />} />
>>>>>>> 32625e071bcaf4e82b73b055ce8a842176fa14ef

			</Routes>
			<hr></hr>

		</Router>
	)

}
export default App;