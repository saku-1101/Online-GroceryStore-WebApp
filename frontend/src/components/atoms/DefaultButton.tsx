export default function DefaultButton(props: { label: string }) {
  return (
    <>
      <button className="btn btn-primary">{props.label}</button>
    </>
  );
}
