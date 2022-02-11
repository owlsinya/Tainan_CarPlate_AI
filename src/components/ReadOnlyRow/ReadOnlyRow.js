import React from 'react'
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'



export default function ReadOnlyRow({ car, handleEditclick, handleDeleteClick, handleConfirmClick }) {


    
    return (
        <>
            <tr>
                <td>{car.EventDatetime}</td>
                <td>{car.CameraName}</td>
                <td>{car.RoadName}</td>
                <td>{car.PlateNumber}</td>
                <td><ShowImage car={car} /></td>
                <td><ShowVideo car={car} /></td>
                    
                <td>{car.Checked}</td>
        
                <td>
                    <button
                        type="button"
                        onClick={(event) => handleEditclick(event, car)}>修改
                    </button>
                    <button
                        type="button"
                        onClick={(event) => handleDeleteClick(car.PlateNumber)}>刪除
                    </button>
                    <button
                        type="button"
                        onClick={(event) => 
                            handleConfirmClick(event, car, car.PlateNumber)
                        }>儲存
                    </button>
                    
                </td>
            </tr>
        </>

    )
}

