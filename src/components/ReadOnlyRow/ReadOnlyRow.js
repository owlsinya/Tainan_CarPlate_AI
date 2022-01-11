import React from 'react'


export default function ReadOnlyRow({ car, handleEditclick, handleDeleteClick,handleConfirmClick }) {
    return (
        <>
            <tr>
                <td>{car.CameraName}</td>
                <td>{car.RoadName}</td>
                <td>{car.Event}</td>
                <td>{car.EventName}</td>
                <td>{car.EventDatetime}</td>
                <td>{car.CarType}</td>
                <td>{car.ImgName}</td>
                <td>{car.VideoName}</td>
                <td>{car.CarNumber}</td>
                <td>{car.checked}</td>
                <td>{car.printed}</td>
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
                onClick={(event) => handleConfirmClick(event,car,car.CarNumber)}>確認
            </button>
            </td>
            </tr>
        </>

    )
}

