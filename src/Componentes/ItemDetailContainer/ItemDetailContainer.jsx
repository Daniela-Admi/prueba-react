import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../../Helpers/gFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [prodDetail, setProdDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getFetch
      .then((res) => setProdDetail(res.find((item) => item.id === Number(id))))
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
