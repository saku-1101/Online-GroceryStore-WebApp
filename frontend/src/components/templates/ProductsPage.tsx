import { Product } from '../../core/models/Product.model';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { getProductsByCategory } from '../../core/infrastructures/AppApi';

export default function CategoryPage() {
  // url中の : で示されたパラメータのリストを返す
  const params = useParams();
  const [products, setProducts] = useState([]);
  const setData = async (category: string | undefined, sub_category: string | undefined) => {
    const res = await getProductsByCategory(category, sub_category);
    setProducts(res.products);
  };
  useEffect(() => {
    setData(params.category, params.sub_category);
  }, [params.sub_category]);

  return (
    <div className="flex flex-col justify-center">
      <PageTitle title="Products" />
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-10">
          {products.map((product: Product) => (
            <ProductCard key={product.product_id} product={product} button="Add Cart" isCategory={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
