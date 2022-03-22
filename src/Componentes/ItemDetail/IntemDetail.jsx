import React from "react";

function ItemDetail({ producto }) {
  return (
    <div>
      <h3>Item Detalles</h3>
      <img src={producto.foto} alt="imagen del producto" />
      <p>{producto.name}</p>
      <p>{producto.price}</p>
      <p>{producto.categoria}</p>
    </div>
  );
}
export default ItemDetail;
