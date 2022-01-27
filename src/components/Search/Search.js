/*
將查詢條件用變數儲存 , 當按下onClick時將變數送出為查詢mySQL的參數
頁面跳轉至ShowAllJson
*/

import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import SearchTable from '../SearchTable/SearchTable';


function Search() {
	let navigate = useNavigate();

	return (

		<div>
			<div>
				<div>
					<Container fluid>
						<Row>
							<Col>
								<h4>違規事項</h4>
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
								</select></Col>
							<Col>
								<h4>違規車輛種類</h4>
								<select id="illegal_type">
									<option value="0">ALL</option>
									<option value="1">1.大型車</option>
									<option value="2">2.汽車</option>
									<option value="3">3.機車</option>
								</select></Col>
							<Col><h4>違規車號</h4>
								<input type="text" id="illegal_number" placeholder="輸入車號查詢" /></Col>
							<Col><h4>違規日期</h4>
								<input type="date" id="illegal_date" /></Col>
							<Col>
								<h4>開單狀況</h4>
								<select id="illegal_date">
									<option value="0">ALL</option>
									<option value="1">1.已開單</option>
									<option value="2">2.未開單</option>
								</select></Col>
							<Col sm={1}><button
								onClick={() => {
									navigate("/searchtable");
									// <SearchTable />
								}}>查詢</button></Col>
						</Row>
					</Container>
				</div>
			</div>

			<hr />
<<<<<<< HEAD
			<button
				onClick={() => {
					navigate("/showallsearchjson");
				}}>查詢</button>
				
=======

			{/* <h4>1. 依照輸入的條件 搜尋資料庫</h4>
			<h4>2. 將搜尋資料庫後的json 傳給 showalljson</h4> */}


>>>>>>> c46b04543a56bb03b3878d07dc599737822afcd7
		</div >

	)
}

<<<<<<< HEAD
export default Search
=======


// $(relationTable).bootstrapTable('load', data);
// $.ajax({
// 	type: "GET",
// 	url: "/search/case/" + caseId,
// 	success: (data) => {
// 		$(relationTable).bootstrapTable('load', data);

// 	}
// });
export default Search
>>>>>>> c46b04543a56bb03b3878d07dc599737822afcd7
