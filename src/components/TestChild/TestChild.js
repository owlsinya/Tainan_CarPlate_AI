import React from 'react'
import './TestChild.css'

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

export default function TestChild({ setOpenChild }) {

    return (
        <div style={modalBackground}>
            <div style={modalContainer}>
                <div className='titleCloseBtn'>
                    <button
                        onClick={() => {
                            setOpenChild(false)
                        }}>x</button>
                </div>

                <img className='img'
                    src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt=""
                    onClick={
                        () => {
                            setOpenChild(false)
                        }} />
            </div>
        </div>

    );
}
/*
<img
                    onClick={
                        ()=>{setOpenChild(false)
                        }}
                    className='img'
                    src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" />
 */