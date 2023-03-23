import { useState } from 'react';
import Draggable from 'react-draggable';

export default function DraggableCart() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({
      x: x,
      y: y,
    });
  };

  return (
    <Draggable onDrag={handleDrag} position={position}>
      <button className="btn btn-lg no-animation btn-circle fixed right-0 bottom-0 mr-4 mb-4 bg-white border shadow-sm text-2xl z-20">
        🛒
      </button>
    </Draggable>
  );
}
