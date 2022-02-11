/*
匯出excel的按鈕
按下button
會將id為 tblExport 的HTML table 
下載到電腦中(excel檔)
*/

import React from 'react'
import XLSX from 'xlsx'


const htmlExportExcel = (fileExtension, fileName) => {
	var elt = document.getElementById("tblExport");
	var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
	return XLSX.writeFile(wb, fileName + "." + fileExtension || ('MySheetName.' + (fileExtension || 'xlsx')));
}

export default function Excel (props){
	const {fname} = props
		return (
			<div>
				<button onClick={() => htmlExportExcel('xlsx', fname)}>匯出excel</button>
			</div>
		)

}
