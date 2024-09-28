import React, { useState, useEffect } from 'react';

function ProductForm({ onSave, product, onCancel }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    } else {
      setName('');
      setDescription('');
      setPrice('');
      setAvailable(false);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, available };
    onSave(newProduct);
  };

  return (
    <div className={`form-container ${product ? 'editing' : ''}`}>
      <h2>{product ? 'Editar Producto' : 'Registrar Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Disponible:</label>
          <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
        </div>
        <button type="submit">{product ? 'Guardar Cambios' : 'Agregar Producto'}</button>
        {product && <button type="button" onClick={onCancel} className="cancel-button">Cancelar</button>}
      </form>
    </div>
  );
}

export default ProductForm;
