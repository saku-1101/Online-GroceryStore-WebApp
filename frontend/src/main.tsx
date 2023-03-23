import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import NavBar from './components/molecules/NavBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="text-neutral">
      <NavBar />
      <br></br>
      <App />
    </div>
  </React.StrictMode>,
);
