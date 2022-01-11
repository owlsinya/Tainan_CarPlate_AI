/*
將點選的該筆資料製作成表格 , 且包含兩張照片檔 , 影片URL
*/
import React from 'react'
import './BodyTable.css'

function BodyTable() {
	return (
		<div>
			<table id="tblExport" border="1" width="100%">
				<tbody>
					<tr><td>攝影機</td><td>111</td></tr>
					<tr><td>路名</td><td>111</td></tr>
					<tr><td>違規事項</td><td>1.摩托車</td></tr>
					<tr><td>違規事項(警)</td><td>1.摩托車</td></tr>
					<tr><td>日期時間</td><td>20201028084309</td></tr>
					<tr><td>行為人</td><td>20201028084309</td></tr>
					<tr><td><img src={require('./test.jpg')} /></td><td><img src={require('./test.jpg')} /></td></tr>
				</tbody>
			</table>
		</div>
	)
}

export default BodyTable

