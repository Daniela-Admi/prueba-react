import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prodDetail }) => {
  const { photo, name, price, category, stock } = prodDetail;
  const onAdd = (cant) => {
    console.log(cant);
  };
  return (
    <div>
      <h3>Detalles del Producto</h3>
      <img src={photo} alt="imagen del producto" />
      <p className="alert alert-primary w-25">{name}</p>
      <p className="alert alert-primary w-25">{price}</p>
      <p className="alert alert-primary w-25">{category}</p>

      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
