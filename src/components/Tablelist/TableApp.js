import React from 'react';
import MyTable from './MyTable';
// import myJson from "../../test.json";
// import DBJson from "http://61.216.140.11:9098/book/";

const newJson = []; // loading local JSON
// const DBJson = [];

// Loading remote DB Json
const getUrl = async (url) => {
  const res = await fetch(url);
  const results = await res.json();
  return results;
}
const DBJson = getUrl("http://61.216.140.11:9098/book/");
console.log(DBJson);


// for (let i = 0; i < { myJson.length }; i++) {
//   newJson.push(myJson[0]);
// }

function TableApp() {
  return <div>
    <MyTable tableData={DBJson} sizePerPage={10} />
  </div>;
}

export default TableApp;
