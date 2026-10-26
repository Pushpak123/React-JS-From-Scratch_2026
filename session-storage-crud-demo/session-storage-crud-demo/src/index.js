import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReadAll from './components/ReadAll';
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete';
import Read from './components/Read';

const routes = createBrowserRouter([
{path: '/', element: <App/>},
{path: '/readAll', element: <ReadAll/>},
{path: '/create', element: <Create/>},
{path: '/update/:id', element: <Update/>},
{path: '/delete/:id', element: <Delete/>},
{path: '/read/:id', element: <Read/>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
