import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Main from './web/Main.js';


function App() {
  const navigate = useNavigate();

  return (
    <div className='grid-container'>
      <div className='header'>
        <div className='header-container'>

          <div className='header-title' ><img width={65} src='./image/Taiwan_Police_Logo.png' onClick={() => navigate("/")} />台南市警察局 科技執法管理系統</div>

          <div className='header-logout'>登出</div>

        </div>

      </div>

      <div className='main'>
        <Main />
      </div>
    </div>
  )

}
export default App;
