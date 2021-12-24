import React from 'react'
import './Search.css'
import { useNavigate } from "react-router-dom";

function Search() {


	let navigate = useNavigate();
	return (
		<div>
			<table id="searchtbl" border="1">
				<tbody>
					<tr><td>日期時間</td><td><input type="date" /></td></tr>
					<tr><td>車號</td><td><input type="text" /></td></tr>
					<tr><td>違規種類</td>
						<td>
							<select id="dropdown">
								<option value="1">1.違規紅燈直行、右轉及左轉偵測</option>
								<option value="2">2.不依行向專用車道行駛偵測</option>
								<option value="3">3.機車行駛於禁行機慢車道偵測</option>
								<option value="4">4.機慢車停等區車輛違規停放偵測</option>
								<option value="5">5.未保持路口淨空違規偵測</option>
								<option value="6">6.跨越禁止變換車道線偵測</option>
								<option value="7">7.車輛未禮讓行人偵測</option>
								<option value="8">8.違規(臨時)停車偵測</option>
							</select>
						</td>
					</tr>
					<tr><td>違規地點</td>
						<td>
							<select id="dropdown">
								<option value="1">中山路</option>
								<option value="2">山中路</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
			<button
				onClick={() => {
					navigate("/body");
				}}>查詢</button>
		</div>
	)
}

export default Search