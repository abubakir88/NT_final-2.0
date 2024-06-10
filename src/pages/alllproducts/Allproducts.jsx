import React, { useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../components/context/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { togleWishlist } from "../../components/context/wishlistSlice";
import { FaHeart } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Allproducts({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wish = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWishlistToggle = (item) => {
    dispatch(togleWishlist(item));
    const isWished = wish.some((w) => w.id === item.id);
    if (isWished) {
      toast.info("Removed from wishlist", {
        position: "top-right",
      });
    } else {
      toast.success("Added to wishlist", {
        position: "top-right",
      });
    }
  };

  const products = product?.map((item) => (
    <li className="list" key={item.id}>
      <button className="likebtn" onClick={() => handleWishlistToggle(item)}>
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
      <ToastContainer />
    </div>
  );
}

export default Allproducts;
