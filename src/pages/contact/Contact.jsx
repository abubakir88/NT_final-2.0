import React, { useEffect } from 'react'
import './Contact.css'
import contactmap from '../../assets/map3.svg'
function Contact() {
  useEffect(() => {
    scrollTo(0,0)
},[])
  return (
    <div className='contact'>
      <div className='contactus'>
        <p>Контакты</p>
        <div>
          <p><strong>8 (800) 890-46-56</strong></p>
          <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину
          Телефоны: </p>
        </div>
      </div>
      <div className='mapcontainer'>
        <div className='mapval'>
            <div>
              <p><strong>Адрес магазина</strong></p>
              <p>г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div>
              <p><strong>Почта</strong></p>
              <p>NORNLIGHT@mail.ru</p>
            </div>
            <div>
              <p><strong>Телефон</strong></p>
              <p>8 (800) 890-46-56</p>
            </div>
            <button>Оставить заявку</button>
        </div>
      </div>
      <div className='mapval2'>
            <div>
              <p><strong>Адрес магазина</strong></p>
              <p>г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div>
              <p><strong>Почта</strong></p>
              <p>NORNLIGHT@mail.ru</p>
            </div>
            <div>
              <p><strong>Телефон</strong></p>
              <p>8 (800) 890-46-56</p>
            </div>
            <button>Оставить заявку</button>
        </div>
    </div>
  )
}
export default Contact
