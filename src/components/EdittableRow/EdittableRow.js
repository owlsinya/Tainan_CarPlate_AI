/***
 * 此component處理編輯table
 */
import React from 'react'

const EdittableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <h4>{editFormData.number}</h4>
            </td>
            <td>
                <input type="text"
                    placeholder="car_number"
                    name="car_number"
                    value={editFormData.car_number}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type="text"
                    placeholder="car_type"
                    name="car_type"
                    value={editFormData.car_type}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type="date"
                    placeholder="datetime"
                    name="datetime"
                    value={editFormData.datetime}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type="text"
                    placeholder="location"
                    name="location"
                    value={editFormData.location}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                
                <select name="item" value={editFormData.item} onChange={handleEditFormChange}>
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
                <h4>{editFormData.image_src}</h4>
            </td>
            <td>
                <h4>{editFormData.checked}</h4>
            </td>
            <td>
                <h4>{editFormData.printed}</h4>
            </td>
            <td>
                <button type="submit">確認更改</button>
                <button type="button" onClick={handleCancelClick}>取消</button>
            </td>
        </tr>
    )
}

export default EdittableRow