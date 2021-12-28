/*
呼叫ComponentToPrint.js中的components
點選 <列印> 後 , 將'已出單'的tag改為true傳回至mysql儲存

*/
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint.js';


const Printer = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>列印</button>}
        content={() => componentRef.current}
      />
      
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default Printer