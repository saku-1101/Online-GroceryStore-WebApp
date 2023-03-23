import { useState, useLayoutEffect } from 'react';
import './App.css';
import DoraggableCart from './components/atoms/DoraggableCart';
import CategoryPage from './components/templates/CategoryPage';

function App() {
  const [count, setCount] = useState(0);
  // const [data, getData] = useState({ name: 'sakura' });
  // async function fetchData() {
  //   const res = await fetch('http://localhost:8080/sample/');
  //   const jres = await res.json();
  //   getData(jres);
  //   return jres;
  // }
  // useLayoutEffect(() => {
  //   fetchData();
  // });

  return (
    <div className="App">
      <CategoryPage />
      <DoraggableCart />
    </div>
  );
}

export default App;
