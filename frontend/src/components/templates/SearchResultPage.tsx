import { Product } from '../../core/models/Product.model';
import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { useAppSelector } from '../../app/hooks';
import { selectSearchResult } from '../../slices/counter/appSlice';

export default function SearchResultPage() {
  const results = useAppSelector(selectSearchResult);

  return (
    <div className="flex flex-col justify-center">
      <PageTitle title="Result" />
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-10">
          {results.map((result: Product) => (
            <ProductCard key={result.product_id} product={result} button="ADD ALL" isCategory={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
