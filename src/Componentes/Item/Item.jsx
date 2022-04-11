import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const { id, name, category, price, photo } = item;
  const navigate = useNavigate();
  return (
    <div
    // key={prod.id}
    >
      <div className="card w-100 mt-5">
        <div className="card-header">{`${category} ${name} `}</div>
        <div className="card-body">
          <img src={photo} alt="" className="w-50" />
          <br /> $ {price}
        </div>
        <div className="card-footer">
          <button
            className="btn btn-outline-primary btn-block"
            onClick={() => navigate(`/detail/${id}`)}
          >
            Ver producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
