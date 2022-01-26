import React, { useState, useContext } from "react"
import { carContext } from "../../createContext";
import TestChild from "../TestChild/TestChild";
import ShowImage from "../ShowImage/ShowImage";
//import './Test.css'

export default function Test() {
    const [openChild, setOpenChild] = useState(false)

    return (
        <div>
        
            <img
                src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" 
                onClick={() => {
                    setOpenChild(true);
                }}/>
            {openChild && <TestChild setOpenChild={setOpenChild} />}
        </div>
    );
}
/**
 *
 *  <img
                onClick={() => {
                    setOpenChild(true);
                }}
                src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" />
            {openChild && <TestChild setOpenChild={setOpenChild} />}

            https://www.youtube.com/watch?v=ZCvemsUfwPQ
            https://stackoverflow.com/questions/25036597/how-to-enlarge-an-image-on-hover-or-click
 */
/*
 const options = {
        toolbar: 0,
        movable:false,
        zoom:5
    }

    return (
        < div >
        <RcViewer options={options} >
            <img src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" />
        </RcViewer>
        </div >
    )
}*/


//<img src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" />
/***
 *
 *  const [openChild, setOpenChild] = useState(false)
 *  <img
                className="openChild"
                style={{width:'50' , height:'50'}}
                onClick={
                    () => { setOpenChild(true)
                    }}
                src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" />
                 {openChild && <TestChild setOpenChild={setOpenChild} />}
 */