import { useState } from 'react';
import Draggable from 'react-draggable';

export default function DoraggableCart() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = position;
    setPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  return (
    <Draggable onDrag={handleDrag}>
      <div
        className="fixed right-0 bottom-0 mr-4 mb-4 p-4 bg-white border rounded-lg shadow-sm"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        Cart
      </div>
    </Draggable>
  );
}
