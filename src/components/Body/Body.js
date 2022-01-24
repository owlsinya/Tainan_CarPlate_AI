import React from 'react'
import BodyTable from '../BodyTable/BodyTable'
import Printer from '../Printer/Printer';

function Body() {
	return (
		<div>
			<BodyTable />
			<Printer />
			<h1>接收ShowAllJson傳過來的單筆車輛資訊</h1>
			<h1>顯示照片 + 影片URL</h1>
			<h1>此頁面要增加承辦員警 (mysql的user表單) 新增一個useContext</h1>
			<h1>Printer需依照表格大小調整 </h1>
			<h1>按下列印按鈕後 重導(redirect)至ShowAllJson + 更新表格(顯示printed=Y)</h1>
		</div>
	)
}
export default Body;