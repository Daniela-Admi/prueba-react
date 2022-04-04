import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "../Componentes/ItemCount/ItemCount";
import { getFetch } from "../Helpers/gFetch";
import ItemList from "../Componentes/ItemList/ItemList";

function ItemListContiner({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  const onAdd = (cant) => {
    console.log(cant);
  };

  useEffect(() => {
    getFetch //simulacion de llamada a api
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  //console.log(prods);
  return (
    <>
      <ItemList prods={prods} onAdd={onAdd} />
      <button onClick={() => setBool(!bool)}>Click</button>
      <h3>Contador</h3>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default ItemListContiner;
