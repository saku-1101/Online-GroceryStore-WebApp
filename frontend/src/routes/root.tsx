import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/molecules/NavBar';
import DraggableCart from '../components/atoms/DraggableCart';
import Footer from '../components/atoms/Footer';
import { getCategories } from '../core/infrastructures/AppApi';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCategory, appActions } from '../slices/counter/appSlice';

export default function Root() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);

  const setData = async () => {
    const res = await getCategories();
    // store にcategoriesを登録
    dispatch(appActions.setCategory(res.products));
  };
  useEffect(() => {
    setData();
  }, [categories]);
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div id="content" className="w-screen relative">
        <Outlet />
      </div>
      <DraggableCart />
      <Footer />
    </div>
  );
}
