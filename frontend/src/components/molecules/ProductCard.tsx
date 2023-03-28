import DefaultButton from '../atoms/DefaultButton';
import CountingButton from '../atoms/CountingButton';

export default function ProductCard(props: {
  imgUrl: string;
  imgAlt: string;
  category: string;
  name: string;
  tag: string;
  description: string;
  button: string;
}) {
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl p-0">
        <figure>
          <img src={props.imgUrl} alt={props.imgAlt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-neutral-focus">
            {props.category}
            <div className="badge badge-secondary">{props.tag}</div>
          </h2>
          <p className="text-neutral justify-start">{props.description}</p>
          <div className="card-actions justify-end">
            <DefaultButton label={props.button} />
            <CountingButton amount={1} />
          </div>
        </div>
      </div>
    </>
  );
}
