import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { IoIosSearch, IoMdList } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Switch } from "@mui/material";
import { useSelector } from "react-redux";
import { MdArrowForwardIos, MdClear } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";

function Header({ night, setNight, product, setLogin }) {
  const [search, setSearch] = useState("");
  const [catalog, setCatalog] = useState(false);

  const navigate = useNavigate();
  const wish = useSelector((state) => state.wishlist.value);
  const cartitems = useSelector((state) => state.cart.value);
  const label = { inputProps: { "aria-label": "Switch demo" } };

  useEffect(() => {
    // Perform any needed effect related logic here
  }, []);

  const handleSearch = (data) => {
    return data?.filter((item) =>
      item?.title?.toLowerCase()?.includes(search?.toLowerCase()?.trim())
    );
  };

  const pr = handleSearch(product)?.map((item) => (
    <li
      key={item.id}
      onClick={() => {
        navigate(`/product/${item.id}`);
        setSearch("");
      }}
    >
      <div>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </div>
      <MdArrowForwardIos />
    </li>
  ));

  return (
    <div className={night ? "nightlight" : ""}>
      <header className="header">
        <nav className="navbar">
          <ul>
            <li onClick={() => navigate("/about")}>О компании</li>
            <li onClick={() => navigate("/yetkazib-berish")}>
              Доставка и оплата
            </li>
            <li onClick={() => navigate("/qaytarish")}>Возврат</li>
            <li onClick={() => navigate("/garant")}>Гарантии</li>
            <li onClick={() => navigate("/contact")}>Контакты</li>
            <li onClick={() => navigate("/blog")}>Блог</li>
          </ul>
          <div className="phonenum">
            <p>Buyurtma berish</p>
            <Switch
              {...label}
              onClick={() => setNight(!night)}
              defaultChecked={night}
            />
            <p>Light/Night</p>
            <RiLoginBoxFill
              style={{ width: "30px", height: "22px", cursor: "pointer" }}
              onClick={() => {
                if (confirm("Are you sure you want to log out?")) {
                  localStorage.removeItem("login");
                  setLogin(false);
                  navigate("/");
                }
              }}
            />
          </div>
        </nav>
        <div className="logos">
          <button
            style={
              catalog
                ? { position: "fixed", background: "white" }
                : { position: "static" }
            }
            onClick={() => setCatalog(!catalog)}
            className="hiderkatalog"
          >
            {!catalog ? (
              <IoMdList style={{ fontSize: "120%" }} />
            ) : (
              <MdClear style={{ fontSize: "120%" }} />
            )}
          </button>
          {catalog && (
            <div className="absolutecatelog">
              <ul>
                <hr />
                <li onClick={() => navigate("/about")}>Kompaniya haqida</li>
                <hr />
                <li onClick={() => navigate("/yetkazib-berish")}>
                  Yetkazib berish
                </li>
                <hr />
                <li onClick={() => navigate("/qaytarish")}>Qaytarish</li>
                <hr />
                <li onClick={() => navigate("/garant")}>Kafolat</li>
                <hr />
                <li onClick={() => navigate("/contact")}>Aloqa</li>
                <hr />
                <li onClick={() => navigate("/blog")}>Blog</li>
                <hr />
              </ul>
              <br />
              <button>Katalog</button>
              <button
                onClick={() => {
                  localStorage.removeItem("login");
                  setLogin(false);
                }}
              >
                Log Out
              </button>
              <p>8 (800) 890-46-56</p>
              <span>Buyurtma berish</span>
            </div>
          )}
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <div className="catalog">
            <button className="catalogbtn">
              <IoMdList style={{ fontSize: "120%" }} />
              Katalog
            </button>
            <div className="search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Mahsulotlarni qidirish"
              />
              <button>
                <IoIosSearch />
              </button>
              <ul className="searched">
                {search.trim() ? (
                  handleSearch(product).length ? (
                    pr.slice(0, 8)
                  ) : (
                    <li>Noto'g'ri ma'lumot</li>
                  )
                ) : null}
              </ul>
            </div>
          </div>
          <div
            className="pages"
            style={
              catalog
                ? { position: "fixed", zIndex: "99999", left: "70%" }
                : { position: "static" }
            }
          >
            <div className="page" onClick={() => navigate("/wishlist")}>
              <FaRegHeart style={{ fontSize: "110%" }} />
              <p>Избранное</p>
            </div>
            <div
              className="page hider"
              style={
                catalog
                  ? { display: "flex", fontSize: "115%" }
                  : { fontSize: "115%" }
              }
            >
              <LuBarChart />
              <p>Сравнение</p>
            </div>
            <div
              className="page"
              style={{ fontSize: "110%" }}
              onClick={() => navigate("/cart")}
            >
              <FiShoppingCart />
              <p>Корзина</p>
              <sup className="likesup">{cartitems.length}</sup>
            </div>
          </div>
        </div>
        <div className="unhidercon">
          <div className="search unhider">
            <input type="search" placeholder="Mahsulotlarni qidirish" />
            <button>
              <IoIosSearch />
            </button>
          </div>
          <div className="labelnav">
            <Switch
              {...label}
              onClick={() => setNight(!night)}
              defaultChecked={night}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
