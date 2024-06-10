import React, { useEffect, useState } from "react";
import "../../sass/Detail.scss";
import { useParams } from "react-router-dom";
import detimg from "../../assets/det.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { togleWishlist } from "../context/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { addToCart, incCart } from "../context/cartSlice";
function Detail({ product }) {
  let { id } = useParams();
  const [productqu, setProductqu] = useState(false);
  const {
    title,
    image,
    price,
    desc,
    category,
    quantity = 1,
  } = product.find((findproduct) => findproduct.id == id) || {};
  let productan = {
    id,
    title,
    image,
    price,
    desc,
    category,
    quantity,
  };
  let oldprice = +price + 100 + ".00";
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  let wish = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();
  return (
    <div className="detail">
      <div className="productinfowrapper">
        <img src={image} alt="" />
        <div className="detailimagecont">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="productinfo">
          <h1>{title}</h1>
          <p>Scott</p>
          <div className="programs">
            Артикул : 7655-188
            <img src={detimg} alt="" />
          </div>
          <p className="instart">В наличии</p>
          <div className="productprice">
            <p>{price}₽</p> <span>{oldprice}₽</span>
          </div>
          <p className="productdesc">
            Профессиональный гоночный хардтейл для кросс-кантри уровня
            Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
            хардтейлов для кросс-кантри.
          </p>
          <div className="productbuttons">
            {/* {productqu ? (
              <div className="numbercart">
                <button>-</button>
                <p>{quantity}</p>
                <button onClick={() => dispatch(incCart(productan))}>+</button>
              </div>
            ) : (
              <></>
            )} */}
            <button
              onClick={() => {
                dispatch(addToCart(productan));
                setProductqu(true);
              }}
            >
              В корзину
            </button>{" "}
            <button
              className="productlikebtn"
              onClick={() => dispatch(togleWishlist(id))}
            >
              {wish?.some((w) => w.id === id) ? (
                <FaHeart size={22} />
              ) : (
                <IoMdHeartEmpty size={25} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="harakter">
        <p>Характеристика</p>
        <ul className="harakteristika">
          <li>
            <strong>Цвет</strong> Жёлтый
          </li>
          <li className="lichanger">
            <strong>Год</strong> 2016
          </li>
          <li>
            <strong>Диаметр колеса</strong> 27.5
          </li>
          <li className="lichanger">
            <strong>Материал рамы</strong> Карбон
          </li>
          <li>
            <strong>Размер</strong> L
          </li>
          <li className="lichanger">
            <strong>Страна</strong> Швейцария
          </li>
          <li>
            <strong>Производитель</strong> Scott
          </li>
          <li className="lichanger">
            <strong>Покрышки</strong> Schwalbe Rocket Ron EVO / 2.1 127EPI
            Kevlar Bead Tubeless Easy / PaceStar compound
          </li>
          <li>
            <strong>Рама</strong> Scale Carbon / HMX-технология / технология IMP
            / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
          </li>
          <li className="lichanger">
            <strong>Подседельный Штырь</strong> Ritchey WCS 700 Series: Carbon
            Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm
          </li>
          <li>
            <strong>Седло</strong> Ritchey WCS Streem V3 Titanium rails
          </li>
          <li className="lichanger">
            <strong>Вилка</strong> Rock Shox SID RL3 Air / демпфер DNA3 3-режима
            / 15mm QR axle / коническая рулевая труба / Удалённая блокировка,
            регулировка отскока / ход 100mm
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Detail;
