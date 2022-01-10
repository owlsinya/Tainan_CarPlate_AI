/*
將取得的 '所有' json資料在此頁印出 (map+for 讀出所有json)
看是要多個 <按鈕> 讓使用者查看詳細資料, 或是直接 {點選該筆資料} 跳出另個視窗 
--> (將點選的該筆資料傳入BodyTable)
*/
import React from 'react'
import { useNavigate } from "react-router-dom";


export default function ShowAllJson() {
	let navigate = useNavigate();
	return (
		<div>
			<table id="tblExport" border="1" width="100%">
				<tbody>
					<tr>
						<td>案號</td><td>車號</td><td>車種</td><td>日期</td><td>違規地點</td><td>違規事項</td><td>已出單</td><td>詳細內容</td>
					</tr>
					<tr>
						<td>1</td><td>200-EXW</td><td>3.摩托車</td><td>20201028084309</td><td>中山路</td><td>未戴安全帽</td><td>X</td>
						<td><button onClick={() => { navigate("/body"); }}>詳細內容</button></td>
					</tr>
					<tr>
						<td>2</td><td>120-ERT</td><td>2.汽車</td><td>20201201120514</td><td>中山路</td><td>超速</td><td>O</td>
						<td><button onClick={() => { navigate("/body"); }}>詳細內容</button></td>
					</tr>
				</tbody>
			</table>
		</div >
	)

}
