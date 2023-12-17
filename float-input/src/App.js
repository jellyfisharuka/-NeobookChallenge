import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

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
          <button>Login</button>
        </div>
      </div>
    );
  }
  
export default App;
