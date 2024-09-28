import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gestión de Productos</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
