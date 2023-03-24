import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NavBar from './components/molecules/NavBar';
import Root from './routes/root';
import DraggableCart from './components/atoms/DraggableCart';
import CategoryPage from './components/templates/CategoryPage';
import ErrorPage from './error-page';
import Dummy from './components/templates/Dummy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/category',
        element: <CategoryPage />,
      },
      {
        path: '/dummy',
        element: <Dummy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="text-neutral">
      <RouterProvider router={router} />
    </div>
    <DraggableCart />
  </React.StrictMode>,
);
