import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addOrder } from '../../core/infrastructures/AppApi';
import { appActions } from '../../slices/appSlice';

export default function OrderButton(props: {
  label: string;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}) {
  const dispatch = useAppDispatch();

  async function addOrderHandler() {
    dispatch(appActions.setItems({ product_id: props.product_id, product_quantity: props.quantity }));
    dispatch(appActions.setTotal({ product_id: props.product_id, product_subtotal: props.price * props.quantity }));
    const res = await addOrder(props.order_id.toString(), props.product_id.toString(), props.quantity.toString());
    console.log(res);
  }
  return (
    <>
      <button className="btn btn-primary" onClick={(e: any) => addOrderHandler()}>
        {props.label}
      </button>
    </>
  );
}
