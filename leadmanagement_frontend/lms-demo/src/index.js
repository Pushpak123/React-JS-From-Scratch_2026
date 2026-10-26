import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReadAll from './components/ReadAll';
import ChangeStatus from './components/ChangeStatus';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = createBrowserRouter([ 

  {path: '/', element: <App />}, 
  {path: '/readAll', element: <ReadAll/>},
   {path: '/changeStatus/:id', element: <ChangeStatus/>},
   {path: '/create', element: <Create/>}, ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
