import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decCart, incCart, removeFromCart } from '../../components/context/cartSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { PatternFormat } from 'react-number-format'
import Empty from '../../components/empty/Empty'
import { Link, useNavigate } from 'react-router-dom'
function Cart({night}) {
    let navigate = useNavigate()
    const [see,setSee] = useState(null)
    const [fio,setFio] = useState('')
    const [pnumber,setPnumber] = useState('')
    const [pochta,setPochta] = useState('')
    const [address,setAddress] = useState('')
    const [comment,setComment] = useState('')
    let dispatch = useDispatch()
    let cartitems = useSelector(state => state.cart.value)
    const totalPrice = cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let cartproducts = cartitems?.map((item) => (
        <li key={item.id} className='cartlist'>
            <img src={item.image} alt="" onClick={() => navigate(`/product/${item.id}`)} />
           <div className="formedia cartlist">
           <div className='cartitemtitle'>
                <p>{item.title}</p>
                <p>₽{item.price}</p>
            </div>
            <p className='itemdesc'>{item.desc}</p>
            <p className='itemcategory'>{item.category}</p>
            <div className='incdec'>
                <button disabled={item.quantity <= 1} onClick={() => dispatch(decCart(item))}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(incCart(item))}>+</button>
            </div>
            <button className='delbtn' onClick={() => dispatch(removeFromCart(item))}><RiDeleteBin6Line /></button>
           </div>
        </li>
    ))
    let chatId = '-4241654105'
    let bot_Token = '6361316833:AAGYaAgdy7WfJ4MdZc5Sh73iqWTZesqqigA'
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const [iplocation, setIplocation] = useState('');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      setIplocation(`Latitude: ${latitude}, Longitude: ${longitude}`)
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
    let hidencart = cartproducts.slice(0,3)
    let dostavka = 580
    if(cartitems.length == 0){
        return <Empty />
    }
    let forbot = cartitems?.map((item) => item.title + " " + "%0A")
    const handleOrder = () =>{
            let text = ""
        text += `F.I.O: ${fio} %0A`;
        text += `Telefon raqami: ${pnumber} %0A`;
        text += `Pochta: ${pochta} %0A`;
        text += `Joylashuvi: ${address} %0A`;
        text += `Izoh: ${comment} %0A %0A`;
        text += `Shularni olmoqchi: %0A ${forbot?.join(" ")} %0A`;
        text += `Jami pull: ${totalPrice} + ${dostavka} = ${totalPrice + dostavka} %0A %0A`;
        text += `Ip location %0A`;
        text += `${iplocation}`;
        let url = `https://api.telegram.org/bot${bot_Token}/sendMessage?chat_id=${chatId}&text=${text}`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        alert("Buyurtma qabul qilindi tez orada siz bilan bog'lanamiz!")
        dispatch(clearCart())
        navigate('/')
    }
  return (
    <div className='cart'>
        <div className='cartclear' style={night ? {background: 'black'}: {background: 'white'}}>
        <p className='carttitle'  style={{position: 'relative'}}>Корзина <sup style={{left: '155px',background: 'red'}} className='likesup wishsup' >{cartitems.length}</sup></p>
        <button onClick={() => dispatch(clearCart())}>Oчистить корзину</button>
        </div>
      <ul className='cartlists'>
        <li className='cartlist lihider' style={{justifyContent: 'stretch', height: '20px'}}>
            <p style={{width: '16%'}}>Фото</p>
            <p style={{width: '25%'}}>Товары</p>
            <p style={{width: '27%'}}>Описание</p>
            <p style={{width: '14%'}}>Артикул</p>
            <p style={{width: '10%'}}>Количество</p>
        </li>
        <hr className='lihider' />
        {
            see ? cartproducts : hidencart
        }
        {
            cartproducts.length > 3 ? <button className='seeallcart' onClick={() => {
                setSee(!see)
                scrollTo(0,0)
            }}>{see ? 'Hide' : 'See all'}</button> : <></>
        }
      </ul>
      <form action="" onSubmit={handleOrder}>
      <div className='rasmiylashtirish'>
            <div className='inpvalues'>
                <p>Оформление</p>
                <div>
                    <input required type="text" name="" id="" placeholder='ФИО' value={fio} onChange={(e) => setFio(e.target.value)}/>
                    <PatternFormat required value={pnumber} onChange={(e) => setPnumber(e.target.value)} onMouseEnter={() => setPnumber(8)} placeholder='Телефон' format="+99# (##) ### ## ##" />
                    <input required value={pochta} onChange={(e) => setPochta(e.target.value)} type="text" name="" id="" placeholder='Электронная почта' />
                </div>
            </div>
            <hr />
            <div className='dostavka'>
                <p>Доставка</p>
                <input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="" id="" placeholder='Адрес доставки'/>
                <textarea required value={comment} onChange={(e) => setComment(e.target.value)} name="" id="" placeholder='Комментарий'></textarea>
            </div>
      </div>
      <div className='payment'>
        <div className='oplata'>
            <p>Оплата</p>
            <div>
                <p>Товары.............................................{totalPrice}₽</p>
                <p>Доставка..........................................{dostavka}₽</p>
            </div>
        </div>
        <div className='paymanting'>
            <p>{totalPrice + dostavka}₽</p>
            <div>
                <button type='submit'>Купить</button>
                <Link to='https://t.me/+n9zRDa-ygndhM2Ey'>
                <p className='botgo'>Botga o'tish</p>
                </Link>
                <p><input type="radio" name="" id=""/> Я согласен наобработку моих персональных данных</p>
            </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Cart
