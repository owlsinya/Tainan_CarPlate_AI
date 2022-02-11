import React from 'react'
import './ShowLargeImage.css'

const modalContainer = {
  postition: 'fixed',
  padding: '5px',
  zIndex: 1000
}

const modalBackground = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000
}

export default function ShowLargeImage({ car, setShowImg }) {

  const imagesrc = () => {
    const imagesrc = './image/' + car.ImgName4 + '.jpg'
    return imagesrc
  }

  return (
    <div style={modalBackground}>
      <div style={modalContainer}>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              setShowImg(false)
            }}>x</button>
        </div>

        <img className='img'
          alt=''
          width='60%'
          src={imagesrc()}
          onClick={
            () => {
              setShowImg(false)
            }} />
      </div>
    </div>

  );
}