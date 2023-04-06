import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCategoryId, selectSubCategoryId } from '../../slices/appSlice';
export default function BreadCrumbs() {
  const location = useLocation();
  const selected_category: number = useAppSelector(selectCategoryId);
  const selected_sub_category: number = useAppSelector(selectSubCategoryId);

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
              to={'/category/' + selected_category}
              className={
                location.pathname === '/category/' + selected_category ? 'breadcrumb-active' : 'breadcrumb-not-active'
              }
            >
              Sub Categories
            </Link>
          </li>
          <li>
            <Link
              to={'/category/' + selected_category + '/sub_category/' + selected_sub_category}
              className={
                location.pathname.startsWith('/category/' + selected_category + '/sub_category/')
                  ? 'breadcrumb-active'
                  : 'breadcrumb-not-active'
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
