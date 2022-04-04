import React from "react";
import Item from "../Item/Item";

export default function ItemList(props) {
  const { prods, onAdd } = props;
  return (
    <main>
      <h2>Products</h2>
      <div className="d-flex flex-wrap">
        {prods.map((item) => (
          <Item key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
