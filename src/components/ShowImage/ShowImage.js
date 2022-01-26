import React, { useState } from 'react'
import ShowLargeImage from '../ShowLargeImage/ShowLargeImage'


export default function ShowImage(props) {

    const [showImg, setShowImg] = useState(false)

    const { car } = props

    function formatImageUrl(url) {
        const width = '100'
        const height = '100'
        return url.replace('{width}', width).replace('{height}', height)
    }

    return (
        <div>
            <img
                src={formatImageUrl(car.ImgName)}
                alt=""
                onClick={() => {
                    setShowImg(true);
                }} />
            {showImg && <ShowLargeImage car={car} setShowImg={setShowImg} />}
        </div>
    )
}