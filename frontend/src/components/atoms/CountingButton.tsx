export default function CountingButton(props: { amount: number; increaseAmount: any; decreaseAmount: any }) {
  return (
    <>
      <div className="btn-group grid grid-cols-3">
        <button className="btn btn-primary" onClick={() => props.decreaseAmount()}>
          -
        </button>
        <p className="text-2xl text-center align-middle">{props.amount}</p>
        <button className="btn btn-primary" onClick={() => props.increaseAmount()}>
          +
        </button>
      </div>
    </>
  );
}
