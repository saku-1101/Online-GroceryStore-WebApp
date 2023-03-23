import ProductCard from '../molecules/ProductCard';
import PageTitle from '../atoms/PageTitle';

export default function CategoryPage() {
  return (
    <>
      <PageTitle title="Category" />
      <ProductCard
        imgUrl="./src/assets/bread.jpg"
        imgAlt="veg"
        category="Produces"
        name=""
        tag="inStock"
        description="If a dog chews shoes whose shoes does he choose?"
        button="Discover more!"
      />
    </>
  );
}
