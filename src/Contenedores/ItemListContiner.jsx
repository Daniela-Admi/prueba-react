import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../Componentes/ItemList/ItemList";
import { getFetch } from "../Helpers/gFetch";

function ItemListContiner({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  useEffect(() => {
    getFetch //simulacion de llamada a api
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  //console.log(prods);
  <p>{saludo}</p>;
  return <>{loading ? <p>Cargando.. </p> : <ItemList prods={prods} />}</>;
}

export default ItemListContiner;
