import React from 'react'
import { useNavigate } from "react-router-dom";
import PrintComponent from '../PrintComponent/PrintComponent';
import Excel from '../Excel/Excel';


function Header() {

	let navigate = useNavigate();
	return (
		<div>
			<h2>操作介面</h2>
			<button
				onClick={() => {
					navigate("/body");
				}}>首頁</button>

			<button
				onClick={() => {
					navigate("/search");
				}}>查詢</button>
			<Excel />
			<PrintComponent />
			<hr color="black" />

			<h2>相關資訊</h2>
		</div>
	)
}


export default Header