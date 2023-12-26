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
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement');

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, appElement);

export default App;
