import React from 'react';
import MyTable from './MyTable';
import myJson from "../../test.json";

const newJson = [];

// for (let i = 0; i < { myJson.length }; i++) {
//   newJson.push(myJson[0]);
// }

function TableApp() {
  return <div>

    <MyTable tableData={myJson} sizePerPage={10} />
  </div>;
}

export default TableApp;
