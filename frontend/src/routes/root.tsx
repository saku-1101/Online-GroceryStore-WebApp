import { Outlet } from 'react-router-dom';
import NavBar from '../components/molecules/NavBar';
import DraggableCart from '../components/atoms/DraggableCart';

export default function Root() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div id="detail" className="w-screen flex justify-center">
        <Outlet />
      </div>
      <DraggableCart />
    </div>
  );
}
