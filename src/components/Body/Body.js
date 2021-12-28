/*
目前先放 
1.詳細表單(bodytable component) 
2.列印

之後要增加以下
1.承辦員警的資料(mysql的user表單)
2.回上一頁 (back to ShowAllJson)

列印的組件(ComponentToPrint) 也要增加承辦員警的資料(mysql的user表單)

*/

import React from 'react'
import BodyTable from '../BodyTable/BodyTable'
import Printer from '../Printer/Printer';

function Body(){
	return (
		<>
			<BodyTable />
			
			<Printer/>
		</>
	)
}
export default Body;