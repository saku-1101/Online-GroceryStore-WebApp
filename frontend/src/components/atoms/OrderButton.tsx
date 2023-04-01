import { addOrder } from '../../core/infrastructures/AppApi';

export default function OrderButton(props: { label: string; order_id: number; product_id: number; quantity: number }) {
  async function addOrderHandler() {
    await addOrder(props.order_id.toString(), props.product_id.toString(), props.quantity.toString());
  }
  return (
    <>
      <button className="btn btn-primary" onClick={(e: any) => addOrderHandler()}>
        {props.label}
      </button>
    </>
  );
}
