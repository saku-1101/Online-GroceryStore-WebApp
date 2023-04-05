import { useState } from 'react';
import { OrderedProduct } from '../../core/models/OrderedProduct.model';
import CountingButton from '../atoms/CountingButton';
import OrderButton from '../atoms/OrderButton';
import { useAppSelector } from '../../app/hooks';
import { selectOrderId } from '../../slices/appSlice';

export default function ProductCard(props: { order: OrderedProduct }) {
  const order_id: number = useAppSelector(selectOrderId);

  const [amount, setAmount] = useState(props.order.order_detail.quantity);
  function decreaseAmount() {
    const new_amount = amount - 1;
    if (new_amount >= 0) {
      setAmount(new_amount);
    }
  }
  function increaseAmount() {
    setAmount(amount + 1);
  }

  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl p-0">
        <figure>
          <img src={props.order.product.url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-neutral-focus">{props.order.product.product_name}</h2>
          <div className="badge badge-secondary">
            {props.order.product.in_stock - amount > 0 ? 'InStock' : 'OutOfStock'}
          </div>
          <p className="text-base-content justify-start">
            $ {props.order.product.unit_price} {props.order.product.unit_quantity}
          </p>
          <div className="card-actions justify-end">
            <>
              <CountingButton
                increaseAmount={increaseAmount.bind(increaseAmount)}
                decreaseAmount={decreaseAmount.bind(increaseAmount)}
                amount={amount}
              />
              <OrderButton
                label="Add Cart"
                order_id={order_id}
                product_id={props.order.product.product_id}
                quantity={amount}
                price={props.order.product.unit_price}
                in_stock={props.order.product.in_stock - amount > 0}
              />
            </>
          </div>
        </div>
      </div>
    </>
  );
}
