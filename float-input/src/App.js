import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

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

        // Здесь можно добавить логику успешного входа
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        toast.error('Ошибка входа. Попробуйте еще раз.');
      }
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
          <button type="submit">Login</button> {/* Добавляем кнопку отправки формы */}
        </div>
      </form>
    </div>
  );
}

export default App;
