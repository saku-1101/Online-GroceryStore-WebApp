import { useState, useLayoutEffect } from 'react';
import './App.css';
import DefaultButton from './components/atoms/DefaultButton';
import ProductCard from './components/molecules/ProductCard';

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      {/* <p>{data.name}</p> */}
      <DefaultButton label="Add" />
      <ProductCard
        imgUrl="./src/assets/bread.jpg"
        imgAlt="veg"
        category="Produces"
        name=""
        tag="inStock"
        description="If a dog chews shoes whose shoes does he choose?"
      />
    </div>
  );
}

export default App;
