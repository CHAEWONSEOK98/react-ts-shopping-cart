import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ShoppingCartProvider>
    <RouterProvider router={router} />
  </ShoppingCartProvider>
);
