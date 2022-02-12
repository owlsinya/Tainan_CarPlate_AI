import React, { useState } from 'react'
import { carContext } from './createContext.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import LoadJson from './components/LoadJson/LoadJson.js';


import Excel from './components/Excel/Excel.js'
import ShowAllJson from './components/ShowAllJson/ShowAllJson.js';
import Login from './components/Login/Login.js';
import data from './test.json'
// import Sidebar from './components/Sidebar/Sidebar.js';
import TableApp from './components/Tablelist/TableApp.js';
import Search from './components/Search/Search.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Test from './components/Test/Test.js';
import LoadJson from './components/LoadJson/LoadJson.js';


/* 增加一個 redirect 做登入畫面*/

function App() {
	const [cars, setCars] = useState(data);

	return (
		<div className='grid-container'>
			<div className='header'>
				<div className='header-container'>
					<div className='header-title'>台南市警察局 科技執法管理系統</div>
					<div className='header-logout'>登出</div>
				</div>
			</div>
			<div className='menu'>
				<ul className='nav nav-pills flex-column'>
					<li className="nav-item">
						<a className="nav-link tab-header" data-bs-toggle="collapse" href="#tab-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-triangle tab-icon" viewBox="0 0 16 16">
								<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
								<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
							</svg>
							未審查案件
						</a>
						<div className="collapse" id="tab-1">
							<ul className="nav flex-column tab-content">
								<li className="nav-item">
									<a className="nav-link tab-link" href="/" >測試一</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link tab-header" href="/tableapp">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-triangle tab-icon" viewBox="0 0 16 16">
								<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
								<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
							</svg>
							違規案件查詢
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link tab-header" data-bs-toggle="collapse" href="#tab-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-triangle tab-icon" viewBox="0 0 16 16">
								<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
								<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
							</svg>
							統計報表
						</a>
					</li>
				</ul>
			</div>
			<div className='main'>
				<carContext.Provider value={{ cars, setCars }}>
					<Routes>
						{/* <Route path="/" element={<LoadJson />} /> */}
						<Route path="/login" element={<Login />} />
						<Route path="/excel" element={<Excel />} />
						<Route path="/showalljson" element={<ShowAllJson />} />
						<Route path="/tableapp" element={<TableApp />} />
						<Route path="/search" element={<Search />} />
						<Route path="/test" element={<Test />} />
						<Route path="/" element={<LoadJson />} />

					</Routes>
				</carContext.Provider>
			</div>
		</div>
		// <Router>

		// 	{<nav>
		// 		<Sidebar />
		// 	</nav>
		// 	}
		// 	<carContext.Provider value={{ cars, setCars }}>
		// 		<Routes>
		// 			<Route path="/" element={<LoadJson />} />
		// 			<Route path="/login" element={<Login />} />
		// 			<Route path="/body" element={<Body />} />
		// 			<Route path="/excel" element={<Excel />} />
		// 			<Route path="/showalljson" element={<ShowAllJson />} />
		// 			<Route path="/tableapp" element={<TableApp />} />
		// 			<Route path="/search" element={<Search />} />
		// 			<Route path="/searchtable" element={<SearchTable />} />
		// 			<Route path="/test2" element={<Test2 />} />
		// 		</Routes>
		// 	</carContext.Provider>
		// 	<hr></hr>


		// </Router>
	)

}
export default App;