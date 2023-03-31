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
          {categories.map((category) => (
            <ProductCard
              key={category.category}
              imgUrl="src/assets/bread.jpg"
              imgAlt={category.url}
              category={category.category}
              name={category.category}
              tag=""
              description=""
              button="Discover more!"
              uri={'/product/category/' + category.category}
              isCategory={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
