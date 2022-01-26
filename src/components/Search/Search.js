/*
將查詢條件用變數儲存 , 當按下onClick時將變數送出為查詢mySQL的參數
頁面跳轉至ShowAllJson
*/

import React from 'react'
import { useNavigate } from "react-router-dom";

function Search() {
	let navigate = useNavigate();
	return (
		<div>
			<div>
				<h2>違規事項</h2>
				<select id="illegal_cartype">
					<option value="0">ALL</option>
					<option value="1">1.違規紅燈直行、右轉及左轉偵測</option>
					<option value="2">2.不依行向專用車道行駛偵測</option>
					<option value="3">3.機車行駛於禁行機慢車道偵測</option>
					<option value="4">4.機慢車停等區車輛違規停放偵測</option>
					<option value="5">5.未保持路口淨空違規偵測</option>
					<option value="6">6.跨越禁止變換車道線偵測</option>
					<option value="7">7.車輛未禮讓行人偵測</option>
					<option value="8">8.違規(臨時)停車偵測</option>
				</select>


				<h2>違規車輛種類</h2>
				<select id="illegal_type">
					<option value="0">ALL</option>
					<option value="1">1.大型車</option>
					<option value="2">2.汽車</option>
					<option value="3">3.機車</option>
				</select>

				<h2>違規車號</h2>
				<input type="text" id="illegal_number" placeholder="輸入車號查詢" />


				<h2>違規日期</h2>
				<input type="date" id="illegal_date" />


				<h2>開單狀況</h2>
				<select id="illegal_date">
					<option value="0">ALL</option>
					<option value="1">1.已開單</option>
					<option value="2">2.未開單</option>
				</select>
			</div>
			<hr />
			<button
				onClick={() => {
					navigate("/showallsearchjson");
				}}>查詢</button>
				
		</div >
	)
}

export default Search
