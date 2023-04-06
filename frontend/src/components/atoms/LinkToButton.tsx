import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { appActions } from '../../slices/appSlice';

export default function LinkToButton(props: {
  label: string;
  category_id: number;
  subcategory_id: number;
  isSub: boolean;
}) {
  const dispatch = useAppDispatch();
  return (
    <>
      {!props.isSub ? (
        // category page to sub category page
        <Link to={'/category/' + props.category_id}>
          <button className="btn btn-primary" onClick={() => dispatch(appActions.setCategoryId(props.category_id))}>
            {props.label}
          </button>
        </Link>
      ) : (
        // sub category page to product page
        <Link to={'/category/' + props.category_id + '/sub_category/' + props.subcategory_id}>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(appActions.setSubCategoryId(props.subcategory_id))}
          >
            {props.label}
          </button>
        </Link>
      )}
    </>
  );
}
