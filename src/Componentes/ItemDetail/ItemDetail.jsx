import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prodDetail }) => {
  const { foto, name, price, categoria, stock } = prodDetail;
  const onAdd = (cant) => {
    console.log(cant);
  };
  return (
    <div>
      <h3>Detalles del Producto</h3>
      <img src={foto} alt="imagen del producto" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{categoria}</p>

      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
