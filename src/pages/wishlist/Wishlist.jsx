import React from 'react'
import './Wishlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { LuShoppingCart } from 'react-icons/lu'
import { togleWishlist } from '../../components/context/wishlistSlice'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { addToCart } from '../../components/context/cartSlice'
import { IoMdHeartEmpty } from 'react-icons/io'
import Empty from '../../components/empty/Empty'
function Wishlist() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let wish = useSelector(state => state.wishlist.value)
    let wishes = wish?.map((item) => (
      <li className='list' key={item.id}>
      <button className='likebtn' onClick={() => dispatch(togleWishlist(item))}>{wish.some(w => w.id === item.id) ?<FaHeart size={22} /> : <IoMdHeartEmpty size={25} />}</button>
      <img src={item.image} alt="" onClick={() => navigate(`product/${item.id}`)} />
      <h4>{item.title?.slice(0,15)}</h4>
      <span>{+item.price + 100 + '.00'}₽</span>
      <div className='addcart'>
      <p>{item.price}₽</p>
      <button onClick={() => dispatch(addToCart(item))}><LuShoppingCart /></button>
      </div>
  </li>
    ))
    if(wish.length == 0){
      return <Empty />
  }
  return (
    <div className='wishlist' >
        <p style={{fontSize: '40px', fontWeight: '600',position: 'relative'}}>Избранные товары<sup className='likesup wishsup' >{wish.length}</sup></p> 
      <ul className='lists wishlists'>
        {
            wishes
        }
      </ul>
    </div>
  )
}

export default Wishlist
