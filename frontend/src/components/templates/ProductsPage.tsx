import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { getProductsByCategory } from '../../core/infrastructures/AppApi';

export default function CategoryPage() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const setData = async (category: string | undefined) => {
    const res = await getProductsByCategory(category);
    setProducts(res.products);
  };
  useEffect(() => {
    setData(params.category);
  }, [params.category]);

  return (
    <div className="flex flex-col justify-center">
      <PageTitle title="Products" />
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.product_id}
              imgUrl="src/assets/bread.jpg"
              imgAlt={product.url}
              category={product.category}
              name={product.product_name}
              tag=""
              description=""
              button="ADD ALL"
              uri="/"
              isCategory={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
