import React, { useState, useContext } from 'react'
import { carContext } from '../../createContext';
import Excel from '../Excel/Excel'

/**
 * 
 1)	規類型件數統計表(每週、每月)
(2)	違規類型車種件數統計表(每週、每月)
(3)	違規類型車輛明細表。

 */

//GET
/*
fetch("http://61.216.140.11:9098/book/",{method:'GET'})
.then(res=>{
    return res.json()
    //res.text()可得到string
})
  .then(data=>console.log(data))
  .catch(error=>console.log(error))
*/


//POST
/*
fetch("http://61.216.140.11:9098/book/" ,{
  method:'POST',
  headers:{ 'Content-Type':'application/json' },
  body: JSON.stringify({ ID:'5' })
})
.then(res=>{
  return res.json()
})
.then(data=>console.log(data))

  
*/



export default function Test() {
  const { cars, setCars } = useContext(carContext)
/*
  let f=fetch("http://61.216.140.11:9098/book/")
  f.then(function(userData){
    return userData.json()
  })
  .then(function(data){
    console.log( data)
  })
*/

fetch("http://61.216.140.11:9098/book/",{method:'GET'})
.then(res=>{
    return res.json()
    //res.text()可得到string
})
  .then(data=>data)
  .catch(error=>console.log(error))

  console.log(data)

  return (
    <div>
      <h1>{cars[0].CreateAt}</h1>
      <button>違規類型件數統計表  Event</button>
      <button>違規類型車種件數統計表  Event + CarType</button>
      <button>違規類型車輛明細表   Event + CarNumber</button>
      
      
      <table id="tblExport" border="1" width="100%">
        <tbody>
          <tr><td>攝影機</td><td>1111</td></tr>
          <tr><td>路名</td><td>111</td></tr>
          <tr><td>違規事項</td><td>1.摩托車</td></tr>
          <tr><td>違規事項(警)</td><td>1.摩托車</td></tr>
          <tr><td>日期時間</td><td>20201028084309</td></tr>
          <tr><td>行為人</td><td>20201028084309</td></tr>

        </tbody>
      </table>
      <Excel fname={cars[1].CarNumber}/>
    </div>
  )
}





// <source src='D:\test_video\1.mp4' type="video/mp4"/>
/**
 *
 *  <ReactPlayer url='./1.mp4'
            controls='true'
            playing={isPlaying}
            />
            <button onClick={()=>setIsPlaying(!isPlaying)}>
                {isPlaying?'stop':'play'}
            </button>
 *
 *
 *
 *
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