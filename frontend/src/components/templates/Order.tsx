import PageTitile from '../atoms/PageTitle';
import OrderDetails from '../atoms/OrderDetails';
import { Link } from 'react-router-dom';
import { checkOut } from '../../core/infrastructures/AppApi';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectOrderId } from '../../slices/appSlice';

export default function Order() {
  const [form, setState] = useState({ name: '', post: '', suburb: '', state: '', country: '', email: '' });
  const [message, setError] = useState('');
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSetState = (input: string) => (e: any) => {
    if (isValidEmail(e.target.value)) {
      setState({ ...form, [input]: e.target.value });
      setError('');
    } else {
      setError('Invalid Email address');
    }
  };
  const orderId = useAppSelector(selectOrderId);

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
        <PageTitile title="Place the Order" />
        <div className="form-control w-full max-w-md align-middle">
          <label className="label">
            <span className="label-text">Name</span>
            <span className="label-text-alt text-error">*</span>
          </label>
          <input
            type="text"
            onChange={handleSetState('name')}
            placeholder="Type here"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md flex flex-row">
          <div className="basis-1/2 flex flex-col">
            <label className="label">
              <span className="label-text">Post Address</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="text"
              onChange={handleSetState('post')}
              placeholder="Type here"
              className="input input-bordered max-w-md"
            />
          </div>
        </div>
        <div className="w-full max-w-md flex flex-row gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Suburb</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="text"
              onChange={handleSetState('suburb')}
              placeholder="Type here"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">State</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="text"
              onChange={handleSetState('state')}
              placeholder="Type here"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="text"
              onChange={handleSetState('country')}
              placeholder="Type here"
              className="input input-bordered w-full max-w-md"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">Email</span>
            <span className="label-text-alt text-error">* {message}</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onChange={handleSetState('email')}
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="w-full flex flex-row justify-center gap-10">
          <OrderDetails />
          <button className="btn btn-secondary" onClick={() => checkOut(form.name, form.email, orderId.toString())}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
