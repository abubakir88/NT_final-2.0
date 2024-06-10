import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import payment from '../../assets/payment.png'
import vk from '../../assets/vk.png'
function Footer({night}) {
  return (
    <div className={night ? 'nightlight': ''}>
      <footer className='footer'>
      <div className='uls'>
      <ul>
        <li><img src={logo} alt="" /></li>
        <li><strong>8 (800) 890-46-56</strong></li>
        <li><img src={payment} alt="" /></li>
        <li>Политика конфидециальности</li>
        <li>Пользовательское соглашение</li>
        <li className='imageli'><img src={vk} alt="" /><img src={vk} alt="" /><img src={vk} alt="" /></li>
      </ul>
      <ul>
        <li><strong>Покупателям</strong></li>
        <li>О компании</li>
        <li>Доставка и оплата</li>
        <li>Возврат</li>
        <li>Гарантии</li>
        <li>Гарантии</li>
        <li>Контакты</li>
        <li>Блог</li>
      </ul>
      <ul>
        <li><strong>Товары</strong></li>
        <li>Люстры</li>
        <li>Светильники</li>
        <li>Бра</li>
        <li>Торшеры</li>
        <li>Комплектуюшие</li>
        <li>Настольные лампы</li>
      </ul>
      <ul style={{height: 'auto'}}>
        <li>Споты</li>
        <li>Трековые светильники</li>
        <li>Уличные светильники</li>
        <li>Технические светильники</li>
        <li>Светодиодные ленты</li>
        <br />
      </ul>
      </div>
    </footer>
    </div>
    
  )
}

export default Footer
