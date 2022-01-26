import React from 'react'
import ShowImage from '../ShowImage/ShowImage'



export default function ReadOnlyRow({ car, handleEditclick, handleDeleteClick, handleConfirmClick }) {


    
    return (
        <>
            <tr>
                <td>{car.EventDatetime}</td>
                <td>{car.CameraName}</td>
                <td>{car.RoadName}</td>
                <td>{car.CarNumber}</td>
                <td><ShowImage car={car} /></td>
                <td>{car.VideoName}</td>
                <td>{car.checked}</td>
        

                <td>
                    <button
                        type="button"
                        onClick={(event) => handleEditclick(event, car)}>修改
                    </button>
                    <button
                        type="button"
                        onClick={(event) => handleDeleteClick(car.CarNumber)}>刪除
                    </button>
                    <button
                        type="button"
                        onClick={(event) => 
                            handleConfirmClick(event, car, car.CarNumber)
                        }>儲存
                    </button>
                    
                </td>
            </tr>
        </>

    )
}

