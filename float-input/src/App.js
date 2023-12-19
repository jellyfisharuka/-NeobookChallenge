import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useFormik } from 'formik'; // Импорт useFormik

import Register from './components/register_auth';
import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  // Используем useFormik для управления формой
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        // Отправляем данные на сервер, используя axios или другую библиотеку для HTTP-запросов
        const response = await axios.post('https://neobook.online/mobi-market/swagger/', values);
        console.log('Ответ сервера:', response.data);

        // Здесь можно добавить логику успешного входа
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        toast.error('Ошибка входа. Попробуйте еще раз.'); // Показываем сообщение об ошибке с помощью react-toastify
      }
    },
  });

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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <form onSubmit={formik.handleSubmit}>
        <div className="box-form">
          <div className="left">
            <div className="overlay"></div>
          </div>
          <div className="right" style={{ height: '100%' }}>
            <h5></h5>
            <p><a href="#"></a></p>
            <div className="inputs1">
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <label htmlFor="text">Username</label>
              <br />
            </div>
            <div className="inputs2">
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <label htmlFor="password">Password</label>
              <br />
            </div>
            <div className="remember-me--forget-password">
              <p>Forgot password?</p>
            </div>
            <br />
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </Router>
  );
}

export default App;
