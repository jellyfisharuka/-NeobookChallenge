import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './components/register_auth';
import Layout from './components/Layout'; // Предполагается, что у вас есть компонент Layout
import Login from './components/Login'; // Предполагается, что у вас есть компонент Login

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://neobook.online/mobi-market/swagger/'
        );
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <div className="box-form">
        <div className="left">
          <div className="overlay"></div>
        </div>
        <div className="right" style={{ height: '100%' }}>
          <h5></h5>
          <p><a href="#"></a></p>
          <div className="inputs1">
            <input type="text" /><label htmlFor="text">Username</label>
            <br />
          </div>
          <div className="inputs2">
            <input type="password" /><label htmlFor="password">Password</label>
            <br />
          </div>
          <div className="remember-me--forget-password">
            <p>Forgot password?</p>
          </div>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </Router>
  );
}

export default App;

