import About from '@pages/About';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import Root from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
