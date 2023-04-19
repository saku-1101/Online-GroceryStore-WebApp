import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import CategoryPage from './components/templates/CategoryPage';
import SubCategoryPage from './components/templates/SubCategoryPage';
import ErrorPage from './error-page';
import Dummy from './components/templates/Dummy';
import ProductsPage from './components/templates/ProductsPage';
import SearchResultPage from './components/templates/SearchResultPage';
import SelectTheCategoryError from './components/templates/SelectTheCategoryError';
import Order from './components/templates/Order';
import Cart from './components/templates/Cart';
import Home from './components/templates/Home';
import ThankyouPage from './components/templates/ThankyouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <CategoryPage />,
      },
      {
        path: '/category/0',
        element: <SelectTheCategoryError />,
      },
      {
        path: '/category/:category',
        element: <SubCategoryPage />,
      },
      {
        path: '/category/:category/sub_category/0',
        element: <SelectTheCategoryError />,
      },
      {
        path: '/category/:category/sub_category/:sub_category',
        element: <ProductsPage />,
      },
      {
        path: '/search/result',
        element: <SearchResultPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/thankyou',
        element: <ThankyouPage />,
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
    <Provider store={store}>
      <div className="text-neutral">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
);
