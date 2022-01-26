/***
 * 將查詢後的資料在此頁顯示
 */

import React, { useContext } from 'react'
import { carContext } from '../../createContext'
import { useNavigate } from "react-router-dom";
import LoadJson from '../LoadJson/LoadJson';


export default function ShowAllJson() {
    return <div>
        <h1>再call一次LoadJson
        </h1>
    </div>;
}



/*
export default function ShowAllJson(navigation) {
    const navigate = useNavigate();
    const { cars, setCars } = useContext(carContext);


    const tableHeader = () => {
        let header = Object.keys(cars[0])
        return header.map((key, index) => {
            return <th key={index}> {key} </th>
        })
    }

    const handleConfirmClick = (event, car, carNumber) => {
        event.preventDefault()

        const formValues = {
            checked: "car.checked",
            printed: "car.printed"
        }

        const index = cars.findIndex((car) => car.CarNumber === carNumber)
        const confirmedCars = [...cars]

        confirmedCars[index] = formValues
        //將要更新的confirmedCar更新
        setCars(confirmedCars)
    }

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>{tableHeader()}
                        <th>開單</th>
                    </tr>
                </thead>

                <tbody>
                    {cars.map((car) => (
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
                            <td><button onClick={
                                (event) => {
                                    handleConfirmClick(event, car, car.CarNumber);

                                    navigate("/test");
                                    
                                }}>送出</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >

            
        </div >
    )
}
*/