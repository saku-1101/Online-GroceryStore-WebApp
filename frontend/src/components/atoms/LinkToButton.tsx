import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { appActions } from '../../slices/appSlice';

export default function LinkToButton(props: { label: string; category_id: number }) {
  const dispatch = useAppDispatch();
  return (
    <>
      <Link to={'/product/category/' + props.category_id}>
        <button className="btn btn-primary" onClick={() => dispatch(appActions.setCategoryId(props.category_id))}>
          {props.label}
        </button>
      </Link>
    </>
  );
}
