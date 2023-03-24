import { useState } from 'react';
export default function CountingButton(props: { amount: number }) {
  const [amount, setAmount] = useState(props.amount);
  return (
    <>
      <div className="btn-group grid grid-cols-3">
        <button className="btn btn-primary" onClick={() => setAmount(amount - 1)}>
          -
        </button>
        <p className="text-2xl text-center align-middle">{props.amount}</p>
        <button className="btn btn-primary" onClick={() => setAmount(amount + 1)}>
          +
        </button>
      </div>
    </>
  );
}
