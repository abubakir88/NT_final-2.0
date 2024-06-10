import React, { useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../components/context/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { togleWishlist } from "../../components/context/wishlistSlice";
import { FaHeart } from "react-icons/fa";

function Allproducts({ product }) {
  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  let wish = useSelector((state) => state.wishlist.value);
  let navigate = useNavigate();
  let products = product?.map((item) => (
    <li className="list" key={item.id}>
      <button className="likebtn" onClick={() => dispatch(togleWishlist(item))}>
        {wish.some((w) => w.id === item.id) ? (
          <FaHeart size={22} />
        ) : (
          <IoMdHeartEmpty size={25} />
        )}
      </button>
      <img
        src={item.image}
        alt=""
        onClick={() => navigate(`product/${item.id}`)}
      />
      <h4>{item.title?.slice(0, 15)}</h4>
      <span>{+item.price + 100 + ".00"}₽</span>
      <div className="addcart">
        <p>{item.price}₽</p>
        <button onClick={() => dispatch(addToCart(item))}>
          <LuShoppingCart />
        </button>
      </div>
    </li>
  ));
  return (
    <div
      style={{
        width: "80%",
        maxWidth: "1280px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <ul className="lists">{products}</ul>
    </div>
  );
}

export default Allproducts;
