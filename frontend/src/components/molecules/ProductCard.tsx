import { useState } from 'react';
import { Product } from '../../core/models/Product.model';
import DefaultButton from '../atoms/LinkToButton';
import CountingButton from '../atoms/CountingButton';
import OrderButton from '../atoms/OrderButton';
import { useAppSelector } from '../../app/hooks';
import { selectOrderId } from '../../slices/appSlice';

export default function ProductCard(props: { product: Product; button: string; isCategory: boolean }) {
  const order_id: number = useAppSelector(selectOrderId);
  const [amount, setAmount] = useState<number>(0);
  function decreaseAmount() {
    const new_amount = Number(amount) - 1;
    if (new_amount >= 0) {
      setAmount(new_amount);
    }
  }
  function increaseAmount() {
    // stringとして加算されるのてキャスト
    const new_amount = Number(amount) + 1;
    if (new_amount <= props.product.in_stock) {
      setAmount(new_amount);
    }
  }

  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl p-0">
        <figure>
          <img src={props.product.url} alt="" />
        </figure>
        <div className="card-body">
          {props.isCategory ? (
            <h2 className="card-title text-neutral-focus">{props.product.category}</h2>
          ) : (
            <h2 className="card-title text-neutral-focus">{props.product.product_name}</h2>
          )}
          {props.isCategory ? (
            ''
          ) : (
            <div className="badge badge-secondary">
              {props.product.in_stock - amount > 0 ? 'InStock' : 'OutOfStock'}
            </div>
          )}
          {props.isCategory ? (
            ''
          ) : (
            <p className="text-base-content justify-start">
              $ {props.product.unit_price} {props.product.unit_quantity}
            </p>
          )}
          <div className="card-actions justify-end">
            {props.isCategory ? (
              <DefaultButton label={props.button} category_id={props.product.category} />
            ) : (
              <>
                <CountingButton
                  increaseAmount={increaseAmount.bind(increaseAmount)}
                  decreaseAmount={decreaseAmount.bind(increaseAmount)}
                  amount={amount}
                />
                <OrderButton
                  label={props.button}
                  order_id={order_id}
                  product_id={props.product.product_id}
                  quantity={amount}
                  price={props.product.unit_price}
                  in_stock={props.product.in_stock - amount > 0}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
