import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/molecules/NavBar';
import DraggableCart from '../components/atoms/DraggableCart';
import Footer from '../components/atoms/Footer';
import { getCategories, getSubCategoriesByCategory } from '../core/infrastructures/AppApi';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCategory, selectSubCategory, appActions } from '../slices/appSlice';
import { Product } from '../core/models/Product.model';

export default function Root() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);
  const sub_categories = useAppSelector(selectSubCategory);

  const setCategory = async () => {
    const res = await getCategories();
    // store にcategoriesを登録
    dispatch(appActions.setCategory(res.products));
  };

  const setSubCategory = async () => {
    const res: Array<Product> = [];
    for (const category of categories) {
      const subcategory_list = await getSubCategoriesByCategory(category.category.toString());
      subcategory_list.products.forEach((subcategory: Product) => {
        res.push(subcategory);
      });
    }
    // store にcategoriesを登録
    dispatch(appActions.setSubCategory(res));
    console.log(sub_categories);
  };
  useEffect(() => {
    setCategory();
  }, []);
  useEffect(() => {
    setSubCategory();
  }, [categories]);
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <div id="content" className="w-screen relative">
        <Outlet />
      </div>
      <DraggableCart />
      <Footer />
    </div>
  );
}
