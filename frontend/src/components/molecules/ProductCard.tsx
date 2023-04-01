import { Product } from '../../core/models/Product.model';
import DefaultButton from '../atoms/LinkToButton';
import CountingButton from '../atoms/CountingButton';
import OrderButton from '../atoms/OrderButton';
import { useAppSelector } from '../../app/hooks';
import { selectOrderId } from '../../features/counter/appSlice';

export default function ProductCard(props: { product: Product; button: string; isCategory: boolean }) {
  const order_id = useAppSelector(selectOrderId);
  // amountの定義が親に必要
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
            <div className="badge badge-secondary">{props.product.in_stock ? 'InStock' : 'OutOfStock'}</div>
          )}
          {props.isCategory ? '' : <p className="text-neutral justify-start">Product description comes here.</p>}
          {/* <p className="text-neutral justify-start">{props.description}</p> */}
          <div className="card-actions justify-end">
            {props.isCategory ? (
              <DefaultButton label={props.button} uri={'/product/category/' + props.product.category} />
            ) : (
              <>
                {/* (amount)親コンポーネントの値を子コンポーネントで変更してもらうようにしたいです */}
                <CountingButton amount={0} />
                <OrderButton
                  label={props.button}
                  order_id={order_id}
                  product_id={props.product.product_id}
                  quantity={4}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
