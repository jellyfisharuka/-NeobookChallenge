import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './components/Pages';
import { PageThree, PageFour } from './components/Pages';

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://neobook.online/mobi-market/swagger/', values);
        console.log('Ответ сервера:', response.data);

        toast.error('Ошибка входа. Попробуйте еще раз.');
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        toast.error('Ошибка входа. Попробуйте еще раз.');
      }
      toast.error('Ошибка входа. Попробуйте еще раз.');
    },
  });

  return (
    <div className="box-form">
      <form onSubmit={formik.handleSubmit}> {/* Добавляем форму */}
        <div className="left">
          <div className="overlay"></div>
        </div>
        <div className="right" style={{ height: '100%' }}>
          <h5></h5>
          <p><a href="#"></a></p>
          <div className="inputs1">
          <label htmlFor="username">Username</label>
         <input
          type="text"
         id="username"
         name="username"
         value={formik.values.username}
         onChange={formik.handleChange}
         />
         <br />
         </div>
         <div className="inputs2">
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    name="password"
    value={formik.values.password}
    onChange={formik.handleChange}
  />
  <br />
</div>
          <div className="remember-me--forget-password">
            <p>Forgot password?</p>
          </div>
          <br />
          <button type="submit">Login</button> {/* Добавляем кнопку отправки формы */}
        </div>
      </form>
     
    </div>
    
  );
}

export default App;
