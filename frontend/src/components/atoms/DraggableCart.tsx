import { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { useAppSelector } from '../../app/hooks';
import { selectItems, selectTotal } from '../../slices/counter/appSlice';

export default function DraggableCart() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({
      x: x,
      y: y,
    });
  };

  const items = useAppSelector(selectItems);
  const subtotal = useAppSelector(selectTotal);

  return (
    <Draggable onDrag={handleDrag} position={position} nodeRef={buttonRef}>
      <div
        ref={buttonRef}
        className="dropdown dropdown-top dropdown-left rounded-full flex-none fixed right-0 bottom-0 mr-4 mb-4 bg-white border shadow-sm text-2xl z-20"
      >
        <label tabIndex={1} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{items}</span>
          </div>
        </label>
        <div tabIndex={1} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow p-0">
          <div className="card-body">
            <span className="font-bold text-lg">{items} Items</span>
            <span className="text-info">Subtotal: ${subtotal}</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
