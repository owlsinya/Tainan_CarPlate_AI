/***
 * 此component處理編輯table
 */
import React from 'react'

const EdittableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                {editFormData.CameraName}
            </td>
            <td>
                {editFormData.RoadName}
            </td>
            <td>
                <select name="Event" value={editFormData.Event} onChange={handleEditFormChange}>
                    <option value="illegal-1">(1)違規紅燈直行、右轉及左轉偵測</option>
                    <option value="illegal-2">(2)不依行向專用車道行駛偵測</option>
                    <option value="illegal-3">(3)機車行駛於禁行機慢車道偵測</option>
                    <option value="illegal-4">(4)機慢車停等區車輛違規停放偵測</option>
                    <option value="illegal-5">(5)未保持路口淨空違規偵測</option>
                    <option value="illegal-6">(6)跨越禁止變換車道線偵測</option>
                    <option value="illegal-7">(7)車輛未禮讓行人偵測</option>
                    <option value="illegal-8">(8)違規(臨時)停車偵測</option>
                </select>
            </td>
            <td>
                <input type="text"
                    placeholder="EventName"
                    name="EventName"
                    value={editFormData.EventName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type="date"
                    placeholder="EventDatetime"
                    name="EventDatetime"
                    value={editFormData.EventDatetime}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <select name="CarType" value={editFormData.CarType} onChange={handleEditFormChange}>
                    <option value="行人">(1)行人</option>
                    <option value="汽車">(2)汽車</option>
                    <option value="機車">(3)機車</option>
                    <option value="公車">(4)公車</option>
                    <option value="卡車">(5)卡車</option>
                    <option value="腳踏車">(6)腳踏車</option>
                </select>
            </td>
            <td>
                {editFormData.ImgName}
            </td>
            <td>
                {editFormData.VideoName}
            </td>
            <td>
                <input type="text"
                    placeholder="CarNumber"
                    name="CarNumber"
                    value={editFormData.CarNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                {editFormData.checked}
            </td>
            <td>
                {editFormData.printed}
            </td>
            <td>
                <button type="submit">確認更改</button>
                <button type="button" onClick={handleCancelClick}>取消</button>
            </td>
        </tr>
    )
}

export default EdittableRow