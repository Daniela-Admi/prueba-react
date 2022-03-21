import ItemCount from "../Componentes/ItemCount/ItemCount";

const onAdd = (cant) => {
  console.log(cant);
};
function ItemListContiner({ saludo }) {
  return (
    <>
      <div>{saludo}</div>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default ItemListContiner;
