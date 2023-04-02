import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCategoryId } from '../../slices/counter/appSlice';
export default function BreadCrumbs() {
  const location = useLocation();
  const selected_category: number = useAppSelector(selectCategoryId);

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className={location.pathname === '/category' ? 'breadcrumb-active' : 'breadcrumb-not-active'}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to={'/product/category/' + selected_category}
              className={
                location.pathname.startsWith('/product/category/') ? 'breadcrumb-active' : 'breadcrumb-not-active'
              }
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
