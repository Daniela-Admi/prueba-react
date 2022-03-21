import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ initial = "1", stock = "5", onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (initial < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const agregar = () => {
    onAdd(count);
  };
  return (
    <div>
      <button onClick={restar}> - </button>
      <label> {count} </label>
      <button onClick={sumar}> + </button>
      <br />
      <button onClick={agregar}>Add to Cart</button>
    </div>
  );
};
export default ItemCount;
