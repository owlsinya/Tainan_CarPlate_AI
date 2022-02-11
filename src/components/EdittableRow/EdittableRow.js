/***
 * 此component處理編輯table
 */
import React from 'react'
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'

const EdittableRow = ({car, editFormData, handleEditFormChange, handleCancelClick }) => {
    
    
    return (
        <tr>
            <td>
                {editFormData.EventDatetime}
            </td>
            <td>
                {editFormData.CameraName}
            </td>
            <td>
                {editFormData.RoadName}
            </td>
            <td>
                <input type="text"
                    placeholder="PlateNumber"
                    name="PlateNumber"
                    value={editFormData.PlateNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
         
            <td >
            <ShowImage car={car}/>
            </td>
            <td>
                {editFormData.VideoName}
            </td>
           
            <td>
                {editFormData.Checked}
            </td>

            <td>
              
                <button type="submit">確認修改</button>
                <button type="button" onClick={handleCancelClick}>取消</button>
            </td>
        </tr>
    )
}

export default EdittableRow