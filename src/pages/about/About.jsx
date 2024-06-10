import React, { useEffect } from 'react'
import './About.css'
import arte from '../../assets/arte.png'
import divi from '../../assets/divi.png'
import odeon from '../../assets/odeon.png'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import home3 from '../../assets/home3.png'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'
function About() {
    useEffect(() => {
        scrollTo(0,0)
    },[])
  return (
    <div className='aboutcon'>
      <div className='aboutus'>
        <div className='kompaniya'>
            <p>О компании</p>
            <div className='natija'>
                <p>170+ </p>
                <p style={{fontSize: '18px',fontWeight: '500'}}>Товаров</p>
            </div>
            <div className='natija'>
                <p>1000+ </p>
                <p style={{fontSize: '18px',fontWeight: '500'}}>Довольных покупателей</p>
            </div>
            <div className='natija'>
                <p>170+ </p>
                <p style={{fontSize: '18px',fontWeight: '500'}}>Товаров</p>
            </div>
        </div>
        <p><br />
        Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br />Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT! <br/><br/> Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
        </p>
      </div>
      <div className='brandsection'>
      <div className='sectiontitle'>
      <h3>Только проверенные бренды</h3>
      <div className='btncontrol'>
      <button disabled style={{background: 'white'}}><IoIosArrowRoundBack size={20} /></button>
      <button style={{background: 'white'}}><IoIosArrowRoundForward size={20}/></button>
      </div>
  </div>
      <div className="imgcontainer">
          <img src={arte} alt="" />
          <img src={divi} alt="" className='noimg3' />
          <img src={odeon} alt="" className='noimg2' />
          <img src={arte} alt="" className='noimg1' />
      </div>
      </div>
      <div className='blogsection'>
      <div className='sectiontitle'>
            <h3>Блог</h3>
            <button className='arrowbtn'>Перейти в блог <IoIosArrowRoundForward size={20} /></button>
        </div>
        <div className='homes'>
            <div className='home'>
                <img src={home1} alt="" />
                <div>
                    <h4>Как правильно освещать дом снаружи?</h4>
                    <MdArrowOutward size={25} />
                </div>
                <p>01.01.2024</p>
            </div>
            <div className='home'>
                <img src={home2} alt="" />
                <div>
                    <h4>Как правильно освещать дом снаружи?</h4>
                    <MdArrowOutward size={25} />
                </div>
                <p>01.01.2024</p>
            </div>
            <div className='home'>
                <img src={home3} alt="" />
                <div>
                    <h4>Как правильно освещать дом снаружи?</h4>
                    <MdArrowOutward size={25} />
                </div>
                <p>01.01.2024</p>
            </div>
        </div>
      </div>
      </div>

  )
}

export default About
