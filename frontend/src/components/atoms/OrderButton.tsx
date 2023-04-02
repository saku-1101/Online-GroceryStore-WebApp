import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addOrder } from '../../core/infrastructures/AppApi';
import { appActions } from '../../slices/counter/appSlice';

export default function OrderButton(props: {
  label: string;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  clearAmount: any;
}) {
  const dispatch = useAppDispatch();

  async function addOrderHandler() {
    dispatch(appActions.setItems(props.quantity));
    dispatch(appActions.setTotal(props.quantity * props.price));
    const res = await addOrder(props.order_id.toString(), props.product_id.toString(), props.quantity.toString());
    console.log(res);
    props.clearAmount();
  }
  return (
    <>
      <button className="btn btn-primary" onClick={(e: any) => addOrderHandler()}>
        {props.label}
      </button>
    </>
  );
}
