import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import CategoryPage from './components/templates/CategoryPage';
import ErrorPage from './error-page';
import Dummy from './components/templates/Dummy';
import ProductsPage from './components/templates/ProductsPage';
import Counter from './features/counter/Counter';

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
        path: '/product/category/:category',
        element: <ProductsPage />,
      },
      {
        path: '/dummy',
        element: <Dummy />,
      },
      {
        path: '/counter',
        element: <Counter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="text-neutral">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
);
