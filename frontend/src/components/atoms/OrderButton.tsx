import { addOrder } from '../../core/infrastructures/AppApi';

export default function OrderButton(props: { label: string; order_id: string; product_id: string; quantity: string }) {
  async function addOrderHandler() {
    console.log('here1');
    const res = await addOrder(props.order_id, props.product_id, props.quantity);
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
