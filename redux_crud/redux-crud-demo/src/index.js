import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';
import ReadAll from './components/ReadAll';
import ReadOne from './components/ReadOne';
import Delete from './components/Delete';
import store from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';


const routes = createBrowserRouter([
{ path: '/', element: <App /> },
{ path: '/create', element: <Create/> },
{ path: '/update/:id', element: <Update/> },
{ path: '/readAll', element: <ReadAll/> },
{ path: '/read/:id', element: <ReadOne/> },
{ path: '/delete/:id', element: <Delete/> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode > 
  <Provider store={store}>
   <RouterProvider router={routes} /> 
   </Provider> 
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
