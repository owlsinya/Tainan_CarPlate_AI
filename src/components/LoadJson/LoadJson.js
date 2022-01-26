import React, { useState, Fragment, useContext } from 'react'
import { carContext } from '../../createContext';



import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import EdittableRow from '../EdittableRow/EdittableRow';


import FileSaver from 'file-saver'


export default function LoadJson() {



	const { cars, setCars } = useContext(carContext)


	//用來保存按下edit按鈕時 的那排row的car_number
	const [editCarNumber, seteditCarNumber] = useState(null)

	//如果edit有輸入,則將輸入存入seteditFormData
	const [editFormData, seteditFormData] = useState({
		CameraName: '',
		RoadName: '',
		Event: '',
		EventName: '',
		EventDatetime: '',
		CarType: '',
		ImgName: cars.ImgName,
		VideoName: '',
		CarNumber: '',
		checked: '',
		printed: ''
	})
	

	////////////////////////////////////////////////////////////////////////////
	/***
	 * 處理確認按鈕
	 * 當按下確認按鈕時
	 * 將該row的所有car物件存在formValues中
	 * 並更改formValues的key:checked->checked
	 */
	const handleConfirmClick = (event, car, carNumber) => {
		event.preventDefault()

		//用formValues去接所有car的value
		//並更改formValues的key:checked -> checked
		const formValues = {
			CameraName: car.CameraName,
			RoadName: car.RoadName,
			Event: car.Event,
			EventName: car.EventName,
			EventDatetime: car.EventDatetime,
			CarType: car.CarType,
			ImgName: car.ImgName,
			VideoName: car.VideoName,
			CarNumber: car.CarNumber,
			checked: "car.checked",
			printed: car.printed,
		}
		//創建一個confirmedCars陣列 , 複製原始cars物件陣列 , 
		//並將按下確認按鈕的那排index的內容更新到confimedCars

		const index = cars.findIndex((car) => car.CarNumber === carNumber)
		const confirmedCars = [...cars]

		confirmedCars[index] = formValues
		//將要更新的confirmedCar更新
		setCars(confirmedCars)


		//將按下的內容存到saveArr陣列
		const saveArr=[]
		saveArr.push(confirmedCars[index])
	
		//執行download,將此confirmedCars[index]物件轉成JSON.stringify
		//JSON.stringify(value[, replacer[, space]] )
		//downloadtxt(data, filename, type)
		downloadtxt(JSON.stringify(confirmedCars[index],null,'\t'), confirmedCars[index].CarNumber, 'txt') 
		//下載照片
		downloadImage(confirmedCars[index])

		//將確認後的物件移出陣列中
		confirmedCars.splice(index,1)
		setCars(confirmedCars)
	}

	function downloadImage(confirmedCars){
		FileSaver.saveAs(confirmedCars.ImgName, confirmedCars.CarNumber+'.jpg');
	  }

	//將JSON.stringify存成指定的data type(txt)
	//downloadtxt(data, filename, type)
	function downloadtxt(data, filename, type) {
		var file = new Blob([data], {type: type});
		
			var a = document.createElement("a"),
			url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(function() {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);  
			}, 0); 
		
	}


	/******************************************
	 * 當按下修改按鈕時 呼叫handleEditclick函式
	 * 要知道按下的是哪個row(car.number)並存到state中
	 * 並將此car.number的value存到formValues
	 * 再將formValues更新seteditFormData
	 ******************************************/
	const handleEditclick = (event, car) => {
		event.preventDefault()

		//將要更新的car.number存在state中
		seteditCarNumber(car.CarNumber)
		//用formValues去接所有car的value
		const formValues = {
			CameraName: car.CameraName,
			RoadName: car.RoadName,
			Event: car.Event,
			EventName: car.EventName,
			EventDatetime: car.EventDatetime,
			CarType: car.CarType,
			ImgName: car.ImgName,
			VideoName: car.VideoName,
			CarNumber: car.CarNumber,
			checked: car.checked,
			printed: car.printed
		}
		//將formValues更新至seteditFormData , 避免直接更改[cars,setCars]
		seteditFormData(formValues)
	}

	/******************************************
	 * 當表單有變更時 呼叫handleEditFormData
	 * 取得被變更的那個cell的value(存在newFormData)
	 * 並將原始的editFormData 合併 新更改的newFormData
	 ******************************************/
	const handleEditFormChange = (event) => {
		event.preventDefault()

		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value

		const newFormData = { ...editFormData }
		newFormData[fieldName] = fieldValue
		//將合併後的data更新至seteditFormData
		seteditFormData(newFormData)
	}

	/******************************************
	 * 當表單更改完畢並按下確認時 呼叫handleEditFormSubmit
	 * 取得被變更cell的value(存在newFormData)
	 * 並將原始的editFormData和newFormData合併
	 * 當按下確認修改後將check設為true
	 ******************************************/
	const handleEditFormSubmit = (event) => {
		event.preventDefault()

		//用editedCar去接所有editFormData中的car object
		const editedCar = {
			CameraName: editFormData.CameraName,
			RoadName: editFormData.RoadName,
			Event: editFormData.Event,
			EventName: editFormData.EventName,
			EventDatetime: editFormData.EventDatetime,
			CarType: editFormData.CarType,
			ImgName: editFormData.ImgName,
			VideoName: editFormData.VideoName,
			//CarNumber: editCarNumber,
			CarNumber: editFormData.CarNumber,
			checked: "car.checked",
			printed: editFormData.printed
		}

		const newCars = [...cars]

		const index = cars.findIndex((car) => car.CarNumber === editCarNumber)

		newCars[index] = editedCar

		setCars(newCars)
		//更新完畢 將seteditCarNumber設回null
		seteditCarNumber(null)
	}

	////////////////////////////////////////////////////////////////////////////
	//修改時發現不要更改 返回初始值
	const handleCancelClick = () => {
		seteditCarNumber(null)
	}
	////////////////////////////////////////////////////////////////////////////
	//處理Delete按鈕
	//接收的參數為該車號的index 並將該row的[car]中移除
	const handleDeleteClick = (carNumber) => {
		var yes = window.confirm('確定刪除？');
		if (yes) {
		const newCars = [...cars]
		const index = cars.findIndex((car) => car.CarNumber === carNumber)
		newCars.splice(index, 1)
		setCars(newCars)
		} 
	}

	////////////////////////////////////////////////////////////////////////////
	/******************** 
	 * 讀取object keys
	 ********************/
	/*
	const tableHeader = () => {
		let header = Object.keys(cars[0])
		return header.map((key, index) => {
			return <th key={index}> {key} </th>
		})
	}
	*/

	////////////////////////////////////////////////////////////////////////////
	return (
		<div>
			<form onSubmit={handleEditFormSubmit}>
				<table border="1">
					<thead>
						<tr>
							<th>時間</th>
							<th>攝影機號碼</th>
							<th>地點</th>
							<th>車號</th>
							<th>照片</th>
							<th>影片</th>
							<th>處理狀態</th>
						</tr>
					</thead>

					<tbody>
						{cars.map((car) => (
							<Fragment>
								{editCarNumber === car.CarNumber ? (
									<EdittableRow
										car={car}
										editFormData={editFormData}
										handleEditFormChange={handleEditFormChange}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<ReadOnlyRow
										car={car}
										handleEditclick={handleEditclick}
										handleDeleteClick={handleDeleteClick}
										handleConfirmClick={handleConfirmClick}

									/>
								)}
							</Fragment>

						))}
					</tbody>
				</table>
			</form>
			
			
		</div>
	)
}