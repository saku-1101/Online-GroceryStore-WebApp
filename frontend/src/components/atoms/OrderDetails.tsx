import { useAppSelector } from '../../app/hooks';
import { selectItems, selectTotal } from '../../slices/appSlice';

export default function OrderDetails() {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotal);
  return (
    <div className="flex flex-col justify-center">
      <p className="text-md">Items: {items}</p>
      <p className="md:my-2 lg:my-5 text-2xl">Total: ${total}</p>
      <p className="text-sm">Excluding service fees</p>
    </div>
  );
}
