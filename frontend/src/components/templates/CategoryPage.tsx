import { Product } from '../../core/models/Product.model';
import { useEffect, useState } from 'react';
import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { getCategories } from '../../core/infrastructures/AppApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCategory, appActions } from '../../slices/counter/appSlice';

export default function CategoryPage() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);

  const setData = async () => {
    const res = await getCategories();
    // store にcategoriesを登録
    dispatch(appActions.setCategory(res.products));
    console.log(res.products);
  };
  useEffect(() => {
    setData();
  }, [categories]);

  return (
    <div className="flex flex-col justify-center">
      <PageTitle title="Category" />
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-10">
          {categories.map((category: Product) => (
            <ProductCard key={category.category} product={category} button="Discover more!" isCategory={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
