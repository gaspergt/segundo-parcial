import React from 'react';

function Product({ product, onDelete, onEdit, isEditing }) {
  return (
    <div className={`product ${isEditing ? 'editing-product' : ''}`}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} USD</p>
      <p>{product.available ? "Disponible" : "No Disponible"}</p>
      <button onClick={() => onEdit(product)} className="edit">Editar</button>
      <button onClick={() => onDelete(product.id)} className="delete">Eliminar</button>
    </div>
  );
}

export default Product;
