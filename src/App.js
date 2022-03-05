import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Main from './web/Main.js';
import { AuthContext } from './auth/reducer.js';


function App() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(AuthContext);

  // 若按下Logout
  const logout = () => {
    dispatch({
      type: "LOGOUT"
    })
  }


  return (
    <div className='grid-container'>
      <div className='header'>
        <div className='header-container'>

          <div className='header-title' ><img width={65} src='./image/Taiwan_Police_Logo.png' onClick={() => navigate("/")} />台南市警察局 科技執法管理系統</div>

          {/* <div className='header-logout'>登出</div> */}

          {state.isAuthenticated && (
            <Link className='header-logout' to="/login" onClick={logout}>登出</Link>
          )}

        </div>

      </div>

      <div className='main'>
        <Main />
      </div>
    </div>
  )

}
export default App;
