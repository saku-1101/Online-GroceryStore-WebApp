import { useAppSelector } from '../../app/hooks';
import { selectOrderDetails } from '../../slices/appSlice';
import OrderCard from '../molecules/OrderCard';
import PageTitle from '../atoms/PageTitle';
import OrderDetails from '../atoms/OrderDetails';
import { Link } from 'react-router-dom';
import { OrderedProduct } from '../../core/models/OrderedProduct.model';

export default function Cart() {
  const order_list = useAppSelector(selectOrderDetails);

  return (
    <div className="flex flex-col justify-center">
      <PageTitle title="Cart" />
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-10">
          {order_list.map((order: OrderedProduct, index: number) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row justify-center gap-10">
        <OrderDetails />
        <Link to={'/order'}>
          <button className="btn btn-secondary">Input your Details</button>
        </Link>
      </div>
    </div>
  );
}
