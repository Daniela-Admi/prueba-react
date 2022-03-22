import React from "react";
import Item from "./Item/Item";

export default function ItemList(props) {
  const { item, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {item.map((item) => (
          <Item key={item.id} item={item} onAdd={onAdd}></Item>
        ))}
      </div>
    </main>
  );
}
