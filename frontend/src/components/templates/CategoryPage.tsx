import { Product } from '../../core/models/Product.model';
import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { useAppSelector } from '../../app/hooks';
import { selectCategory } from '../../slices/appSlice';

export default function CategoryPage() {
  const categories = useAppSelector(selectCategory);

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
