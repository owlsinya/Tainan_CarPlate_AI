/*
將查詢後的資料在此頁顯示
*/

import React, { useContext } from 'react'
import { carContext } from '../../createContext'

export default function ShowAllJson() {
    const { cars, setCars } = useContext(carContext);

    function tableHeader() {
        let header = Object.keys(cars[0])
        return header.map((key, index) => {
            return <th key={index}> {key.toUpperCase()} </th>
        })
    }

    function tableData() {
        return cars.map((car, index) => {
            const { number, car_number, car_type, datetime, location, item, image_src, checked, printed } = car
            return (
                <tr key={number}>
                    <td>{number}</td>
                    <td>{car_number}</td>
                    <td>{car_type}</td>
                    <td>{datetime}</td>
                    <td>{location}</td>
                    <td>{item}</td>
                    <td>{image_src}</td>
                    <td>{checked}</td>
                    <td >{printed}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table id="table" border="1">
                <tr>{tableHeader()}</tr>
                <tbody>
                    {tableData()}
                    <td>開單</td>
                </tbody>
            </table>
        </div>
    )

}
