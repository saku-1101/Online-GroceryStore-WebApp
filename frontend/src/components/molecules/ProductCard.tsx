import DefaultButton from '../atoms/LinkToButton';
import CountingButton from '../atoms/CountingButton';
import OrderButton from '../atoms/OrderButton';

export default function ProductCard(props: {
  imgUrl: string;
  imgAlt: string;
  category: string;
  name: string;
  tag: string;
  description: string;
  button: string;
  uri: string;
  isCategory: boolean;
}) {
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl p-0">
        <figure>
          <img src={props.imgUrl} alt={props.imgAlt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-neutral-focus">
            {props.name}
            <div className="badge badge-secondary">{props.tag}</div>
          </h2>
          <p className="text-neutral justify-start">{props.description}</p>
          <div className="card-actions justify-end">
            {props.isCategory ? (
              <DefaultButton label={props.button} uri={props.uri} />
            ) : (
              <>
                <CountingButton amount={0} />
                <OrderButton label={props.button} order_id="34567" product_id="4" quantity="4" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
