import React, { useEffect, useState } from "react";
import ItemDetail from "../../Componentes/ItemDetail/ItemDetail";
import { getFetch } from "../../Helpers/gFetch";

const ItemDetailContainer = () => {
  const [prodDetail, setProdDetail] = useState({});

  useEffect(() => {
    getFetch
      .then((res) => setProdDetail(res.find((item) => item.id === 2)))
      .catch((error) => console.log(error));
  }, []);
  console.log(prodDetail);
  return (
    <div>
      <ItemDetail prodDetail={prodDetail} />
    </div>
  );
};
export default ItemDetailContainer;
