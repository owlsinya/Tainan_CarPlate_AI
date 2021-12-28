/*
將點選的該筆資料製作成表格 , 且包含兩張照片檔 , 影片URL
*/

import React from 'react'
import './BodyTable.css'
import { useNavigate } from "react-router-dom";
import Printer from '../Printer/Printer';

function BodyTable() {
	return (
		<div>
			<table id="tblExport" border="1" width="100%">
				<tbody>
					<tr><td>案號</td><td>1</td></tr>
					<tr><td>車號</td><td>200-EXW</td></tr>
					<tr><td>車種</td><td>1.摩托車</td></tr>
					<tr><td>日期時間</td><td>20201028084309</td></tr>
					<tr><td>違規地點</td><td>中山路</td></tr>
					<tr><td>違規事項</td><td>未戴安全帽</td></tr>
					<tr>

					</tr>
				</tbody>
			</table>
			<img src={require('./test.jpg')} />
			<img src={require('./test.jpg')} />

		</div>
	)
}

export default BodyTable

