import React, { useState } from 'react'
import ShowLargeImage from '../ShowLargeImage/ShowLargeImage'



export default function ShowImage(props) {

    const [showImg, setShowImg] = useState(false)

    const { car } = props

    const imagesrc = () => {
        const imagesrc = './image/' + car.ImgName4 + '.jpg'
        return imagesrc
    }

    return (
        <div>
            <img
                src={imagesrc()}
                alt=""
                width='50%'
                onClick={() => {
                    setShowImg(true);
                }} />
            {showImg && <ShowLargeImage car={car} setShowImg={setShowImg} />}
        </div>
    )
}
/**
 * 
 * 

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
 */