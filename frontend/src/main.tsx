import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NavBar from './components/molecules/NavBar';
import DraggableCart from './components/atoms/DraggableCart';
import CategoryPage from './components/templates/CategoryPage';
import Dummy from './components/templates/Dummy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CategoryPage />,
  },
  {
    path: '/dummy',
    element: <Dummy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="text-neutral flex flex-col">
      <NavBar />
      <App component={<RouterProvider router={router} />} />
    </div>
    <DraggableCart />
  </React.StrictMode>,
);
