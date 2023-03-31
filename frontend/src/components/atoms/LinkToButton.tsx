import { Link } from 'react-router-dom';

export default function LinkToButton(props: { label: string; uri: string }) {
  return (
    <>
      <Link to={props.uri}>
        <button className="btn btn-primary">{props.label}</button>
      </Link>
    </>
  );
}
