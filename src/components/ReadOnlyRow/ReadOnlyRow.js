import React from 'react'


export default function ReadOnlyRow({ car, handleEditclick, handleDeleteClick,handleConfirmClick }) {
    return (
        <>
            <tr>
                <td>{car.number}</td>
                <td>{car.car_number}</td>
                <td>{car.car_type}</td>
                <td>{car.datetime}</td>
                <td>{car.location}</td>
                <td>{car.item}</td>
                <td>{car.image_src}</td>
                <td>{car.checked}</td>
                <td>{car.printed}</td>
            <td>
            <button
                type="button"
                onClick={(event) => handleEditclick(event, car)}>修改
            </button>
            <button
                type="button"
                onClick={(event) => handleDeleteClick(car.number)}>刪除
            </button>
            <button
                type="button"
                onClick={(event) => handleConfirmClick(event,car,car.number)}>確認
            </button>
            </td>
            </tr>
        </>

    )
}

