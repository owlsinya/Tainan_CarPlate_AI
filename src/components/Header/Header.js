/*
網頁的Header
頁面跳轉放這
*/

import React from 'react'
import { useNavigate } from "react-router-dom";
import Excel from '../Excel/Excel';


function Header() {
	let navigate = useNavigate();
	return (
		<div>
			<h2>台南科技執法</h2>
			<button
				onClick={() => {
					navigate("/");
				}}>登入</button>

			<button
				onClick={() => {
					navigate("/search");
				}}>查詢</button>
			
			{/*<Excel />*/}
			<hr color="black" />

			<h2>相關資訊</h2>
		</div>
	)
}


export default Header