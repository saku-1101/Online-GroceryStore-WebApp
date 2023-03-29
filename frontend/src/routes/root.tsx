import { Outlet } from 'react-router-dom';
import NavBar from '../components/molecules/NavBar';
import DraggableCart from '../components/atoms/DraggableCart';

export default function Root() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div id="content" className="w-screen relative">
        <Outlet />
      </div>
      <DraggableCart />
    </div>
  );
}
