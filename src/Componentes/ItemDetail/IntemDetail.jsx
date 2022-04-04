import React from "react";

const ItemDetail = ({ prodDetail }) => {
  const { foto, name, price, categoria } = prodDetail;
  return (
    <div>
      <h3>Detalles del Producto</h3>
      <img src={foto} alt="imagen del producto" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{categoria}</p>
    </div>
  );
};
export default ItemDetail;
