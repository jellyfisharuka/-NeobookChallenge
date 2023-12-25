import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
export default function Appl() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
 
// Will work fine
const Input = (props) => (
  <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
    {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
  </InputMask>
);
 
// Will throw an error because InputMask's and children's onChange aren't the same
const InvalidInput = (props) => (
  <InputMask mask="99/99/9999" value={props.value}>
    {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline onChange={props.onChange} />}
  </InputMask>
);
const schema = Yup.object().shape({
  username: Yup.string().required().minLength(3).maxLength(25),
  email: Yup.string().email().required(),
  password: Yup.string().required().minLength(8).maxLenght(25),
});

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = {
    username: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };

  const errors = schema.validate(formData);

  if (errors.length > 0) {
    // There are errors in the form data
    alert(errors.join("\n"));
  } else {
    // The form data is valid, do something with it
  }
};

const App = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Create Account</button>
    </form>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
//ReactDOM.render(
  //<Provider store={store}>
    //<App />
  //</Provider>,
  //document.getElementById('root')
//)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

