import { useState, useLayoutEffect } from 'react';
import './App.css';
import DefaultButton from './components/atoms/DefaultButton';

function App() {
  const [count, setCount] = useState(0);
  const [data, getData] = useState({ name: 'sakura' });
  async function fetchData() {
    const res = await fetch('http://localhost:8080/sample/');
    const jres = await res.json();
    getData(jres);
    return jres;
  }
  useLayoutEffect(() => {
    fetchData();
  });

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
      <p>{data.name}</p>
      <DefaultButton />
    </div>
  );
}

export default App;
