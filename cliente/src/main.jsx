import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import  {Provider}  from 'react-redux';
import userReducer from '../src/Feature/User';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer:{
    user:userReducer,
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
