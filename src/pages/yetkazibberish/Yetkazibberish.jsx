import React, { useEffect } from "react";
import "../../sass/Yetkazibberish.scss";
import MapComponent from "../../components/location/location";
function Yetkazibberish() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="yetkazish">
      <div className="yetkazishinfo">
        <p>Доставка и оплата</p>
        <div className="dostavka">
          <p>
            <strong>Доставка</strong>
          </p>
          <p>
            Мы осуществляем доставку со склада по Москве и Московской области
            собственной курьерской службой. Транспортными компаниями нашу
            продукцию мы доставляем по всей территории РФ, а так же по всем
            странам СНГ. Сроки доставки: 4—6 недель
          </p>
          <p>
            <strong>Курьерская доставка</strong>
          </p>
          <p>
            БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы
            свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД
          </p>
          <p>
            <strong>Самовывоз</strong>
          </p>
          <p>
            Любой заказ можно забрать самостоятельно по адресу: г.
            Москва, Дмитровское шоссе д.100с2
          </p>
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default Yetkazibberish;
