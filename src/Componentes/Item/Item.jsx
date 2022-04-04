function Item({ item }) {
  const { id, name, categoria, price, foto } = item;
  return (
    <div
    // key={prod.id}
    >
      <div className="card w-100 mt-5">
        <div className="card-header">{`${categoria} ${name} `}</div>
        <div className="card-body">
          <img src={foto} alt="" className="w-50" />
          <br /> $ {price}
        </div>
        <div className="card-footer">
          {/* <button className="btn btn-outline-primary btn-block">
                              detalle del producto
                          </button>                 */}
        </div>
      </div>
    </div>
  );
}

export default Item;
