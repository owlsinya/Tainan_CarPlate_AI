/*
將取得的 '所有' json資料在此頁印出
*/


import React from 'react'

import data from '../../test.json'



export default function ShowAllJson() {


    function tableHeader() {
        let header = Object.keys(data[0])
        return header.map((key, index) => {
            return <th key={index}> {key.toUpperCase()} </th>
        })
    }


    function tableData() {
        return data.map((car, index) => {
            const { number, car_number, car_type, datetime, location, item, image_src, printed } = car
            return (
                <tr key={number}>
                    <td>{number}</td>
                    <td>{car_number}</td>
                    <td>{car_type}</td>
                    <td>{datetime}</td>
                    <td>{location}</td>
                    <td>{item}</td>
                    <td>{image_src}</td>
                    <td >{printed}</td>

                </tr>
            )
        })
    }

    return (
        <div>
            <table id="table" border="1">
                <tbody>
                    <tr>{tableHeader()}</tr>
                    {tableData()}
                </tbody>
            </table>
        </div>
    )

}
