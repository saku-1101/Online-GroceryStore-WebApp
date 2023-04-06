import { useAppSelector } from '../../app/hooks';
import { selectCategory, selectSubCategory } from '../../slices/appSlice';
import { Product } from '../../core/models/Product.model';
import { Link } from 'react-router-dom';
import { category_name, sub_category_name } from '../../core/data/replace.data';

export default function NavMenu() {
  const categories = useAppSelector(selectCategory);
  const sub_categories = useAppSelector(selectSubCategory);

  const handleSubCategoryContent = (category: number) => {
    const content = [];
    for (const sub_category of sub_categories) {
      if (sub_category.category == category) {
        content.push(
          <Link
            to={'/category/' + category + '/sub_category/' + sub_category.sub_category}
            key={sub_category.sub_category}
          >
            <li tabIndex={0} className="py-3">
              {sub_category_name[sub_category.sub_category]}
            </li>
          </Link>,
        );
      }
    }
    return content;
  };
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box">
          {categories.map((category: Product) => (
            <li key={category.category}>
              <span>{category_name[category.category]}</span>
              <ul className="rounded-box p-4 bg-base-100">{handleSubCategoryContent(category.category)}</ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
