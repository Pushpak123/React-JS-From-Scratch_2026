import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { A } from './components/A';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import ReadAll from './components/ReadAll';
import Delete from './components/Delete';
import { B } from './components/B';


 const routes = createBrowserRouter([ 
  {  path: '/', element: <A/>  }, 
  {  path: '/create', element: <Create/>  }, 
  {  path: '/update/:dept/:id', element: <Update/>  }, 
  {  path: '/readAll', element: <ReadAll/>  }, 
  {  path: '/read/:id', element: <Read/>  }, 
  {  path: '/delete', element: <Delete/>  },   
  {path:'/goToA',element:<A/>},
   {path:'/goToB',element:<B/>},

]); 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
  <React.StrictMode> 
    <RouterProvider router={routes} /> 
  </React.StrictMode> 
); 
reportWebVitals(); 