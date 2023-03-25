import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
