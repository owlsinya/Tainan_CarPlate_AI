import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Excel from './components/Excel/Excel.js'
import Header from "./components/Header/Header.js"
import Body from "./components/Body/Body.js"
import Search from './components/Search/Search.js';
import { BasicTable } from './components/BasicTable/BasicTable.js';

function App() {
    return (
        <Router>
            <nav>
                <Header />
            </nav>
            <Routes>
                <Route path="/excel" element={<Excel />} />
                <Route path="/body" element={<Body />} />
                <Route path="/search" element={<Search />} />
                <Route path="/basictable" element={<BasicTable />} />
            </Routes>
            <hr></hr>

        </Router>
    )

}
export default App;

// export default class App extends Component {
//     render() {
//         return (
//             <>
//                 <Header/>          
//                 <Body/>
//                 <Excel/>
//             </>
//         )
//     }
// }

/*
import React from 'react'
import Printer from "./components/Printer/Printer.js"
import Body from "./components/Body/Body.js"

const App=()=> {
    return (
        <Printer />,
        <Body />
    );
  }
  */

