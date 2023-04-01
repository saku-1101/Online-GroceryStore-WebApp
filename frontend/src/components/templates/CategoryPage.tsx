import { Product } from '../../core/models/Product.model';
import { useEffect, useState } from 'react';
import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { getCategories } from '../../core/infrastructures/AppApi';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const setData = async () => {
    const res = await getCategories();
    setCategories(res.products);
  };
  useEffect(() => {
    setData();
  }, []);

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
