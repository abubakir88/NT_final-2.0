import "../../sass/Dashboard.scss";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteProductMutation } from "../context/getRequest";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function Manageproduct({ product }) {
  const [deleteProduct] = useDeleteProductMutation();
  let navigate = useNavigate();
  const handleDelete = (id) => {
    deleteProduct(id);
  };
  let products = product?.slice(0, 8).map((item) => (
    <li className="list" key={item.id}>
      <img
        src={item.image}
        alt=""
        onClick={() => navigate(`/product/${item.id}`)}
      />
      <h4>{item.title?.slice(0, 15)}</h4>
      <span>{+item.price + 100 + ".00"}₽</span>
      <div className="addcart">
        <p>{item.price}₽</p>
        <button
          onClick={() => {
            navigate(`/edit/${item.id}`);
          }}
          style={{
            background: "#fff",
            color: "#000",
            border: "1px solid",
            fontSize: "100%",
            paddingTop: "4px",
          }}
        >
          <CiEdit size={20} color="black" />
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          style={{
            background: "#454545",
            color: "#fff",
            border: "1px solid",
            fontSize: "100%",
            padding: "5px",
            paddingTop: "8px",
          }}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  ));

  return (
    <div className="createpr">
      <p>Manage product</p>
      <ul className="lists pritems">{products}</ul>
    </div>
  );
}

export default Manageproduct;
