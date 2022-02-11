import React from 'react';

export default function DownloadTxt({confirmedCars,downloadtxt}) {

    return
    <div>
        <button type="button" onClick={downloadtxt}>save且送出一個rq給後端 , 儲存此筆資料成txt檔</button>
    </div>;
}
