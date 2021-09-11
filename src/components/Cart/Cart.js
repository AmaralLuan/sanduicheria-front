import React, { useState } from 'react'
import styles from './Cart.module.css'

import img from '../../assets/xfrango.png';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

function Cart({itemPrice}) {
  
  const [totalPrice, setTotalPrice] = useState(); 

  return (
    <div className={styles.Cart}>
      <ul>
        <CartItem 
        img={img}
        title={'X-FRANGO'}
        price={14.99} />

      </ul>

      <footer>
        <h2>{totalPrice}</h2>

        <Button>Checkout</Button>
      </footer>
    </div>
  )
}

export default Cart
