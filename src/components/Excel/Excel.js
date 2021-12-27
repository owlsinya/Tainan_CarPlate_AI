import React, { Component } from 'react'
import XLSX from 'xlsx'


export default class Excel extends Component {

	render() {
		return (
			<div>
				<button onClick={() => htmlExportExcel('xlsx', 'myfirstsheet')}>匯出excel</button>
			</div>
		)
	}

}

const htmlExportExcel = (fileExtension, fileName) => {
	var elt = document.getElementById("tblExport");
	var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
	return XLSX.writeFile(wb, fileName + "." + fileExtension || ('MySheetName.' + (fileExtension || 'xlsx')));
}