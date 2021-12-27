import React from 'react'
import { useNavigate } from "react-router-dom";
import PrintComponent from '../PrintComponent/PrintComponent';



function Header() {

	let navigate = useNavigate();
	return (
		<div>
			<h2>台南市警察局科技執法系統</h2>
			<button
				onClick={() => {
					navigate("/body");
				}}>首頁</button>

			<button
				onClick={() => {
					navigate("/search");
				}}>查詢</button>

			<hr color="black" />


		</div>
	)
}


export default Header