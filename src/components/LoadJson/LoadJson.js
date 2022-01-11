import React, { useState, Fragment } from 'react'

import data from '../../test.json'
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import EdittableRow from '../EdittableRow/EdittableRow';

export default function LoadJson() {


	const [cars, setCars] = useState(data);

	//用來保存按下edit按鈕時 的那排row的car_number
	const [editCarNumber, seteditCarNumber] = useState(null)

	//如果edit有輸入,則將輸入存入seteditFormData
	const [editFormData, seteditFormData] = useState({
		number: '',
		car_number: '',
		car_type: '',
		datetime: '',
		location: '',
		item: '',
		image_src: '',
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
	 const handleConfirmClick = (event,car,carNumber) => {
		event.preventDefault()
	
		//用formValues去接所有car的value
		//並更改formValues的key:checked -> checked
		const formValues = {
			number: car.number,
			car_number: car.car_number,
			car_type: car.car_type,
			datetime: car.datetime,
			location: car.location,
			item: car.item,
			image_src: car.image_src,
			checked: "car.checked",
			printed: car.printed
		}
		//創建一個confirmedCars陣列 , 複製原始cars物件陣列 , 
		//並將按下確認按鈕的那排index加入到confimedCars
		
		const index = cars.findIndex((car)=>car.number===carNumber)
		const confirmedCars=[...cars]
			
		confirmedCars[index] = formValues
		//將要更新的confirmedCar更新
		setCars(confirmedCars)
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
		seteditCarNumber(car.number)
		//用formValues去接所有car的value
		const formValues = {
			number: car.number,
			car_number: car.car_number,
			car_type: car.car_type,
			datetime: car.datetime,
			location: car.location,
			item: car.item,
			image_src: car.image_src,
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
			number: editCarNumber,
			car_number: editFormData.car_number,
			car_type: editFormData.car_type,
			datetime: editFormData.datetime,
			location: editFormData.location,
			item: editFormData.item,
			image_src: editFormData.image_src,
			checked: "car.checked",
			printed: editFormData.printed
		}

		const newCars = [...cars]

		const index = cars.findIndex((car) => car.number === editCarNumber)

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
		const newCars = [...cars]
		const index = cars.findIndex((car) => car.number === carNumber)
		newCars.splice(index, 1)
		setCars(newCars)
	}

	////////////////////////////////////////////////////////////////////////////
	/******************** 
	 * 讀取object keys
	 ********************/
	function tableHeader() {
		let header = Object.keys(data[0])
		return header.map((key, index) => {
			return <th key={index}> {key.toUpperCase()} </th>
		})
	}
	////////////////////////////////////////////////////////////////////////////
	return (
		<div>
			<form onSubmit={handleEditFormSubmit}>
				<table border="1">
					<thead>
						<tr>{tableHeader()}
							<th>確認</th>
						</tr>
					</thead>
					<tbody>
						{cars.map((car) => (
							<Fragment>
								{editCarNumber === car.number ? (
									<EdittableRow
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
