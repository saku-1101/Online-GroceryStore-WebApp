import { useState, useLayoutEffect } from 'react';
import './App.css';
import DraggableCart from './components/atoms/DraggableCart';
import CategoryPage from './components/templates/CategoryPage';

function App() {
  return (
    <div className="App">
      <CategoryPage />
      <DraggableCart />
    </div>
  );
}

export default App;
