import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { useAppSelector } from '../../app/hooks';
import { selectSubCategory } from '../../slices/appSlice';
import { Product } from '../../core/models/Product.model';
import { useParams } from 'react-router';

export default function CategoryPage() {
  const params = useParams();
  console.log(params.category);
  const sub_categories = useAppSelector(selectSubCategory);
  const getCategoriesContent = (sub_categories: Array<Product>) => {
    const content = [];
    for (const category of sub_categories) {
      if (category.category.toString() == params.category) {
        content.push(
          <ProductCard key={category.sub_category} product={category} button="Discover more!" isCategory={true} />,
        );
      }
    }
    return content;
  };

  return (
    <div className="flex flex-col justify-center">
      <PageTitle title="Sub Category" />
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-10">{getCategoriesContent(sub_categories)}</div>
      </div>
    </div>
  );
}
