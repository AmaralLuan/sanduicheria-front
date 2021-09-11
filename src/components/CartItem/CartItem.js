import React, {useState} from 'react'
import Button from '../Button/Button'
import styles from './CartItem.module.css'

function CartItem({title, img}) {
  const [itemPrice, setItemPrice] = useState();
  const [qtd, setQtd] = useState(1);

  const removeQtd = () => {
    if (qtd == 0) {
      setQtd(0)
      setItemPrice(0);
    }else{
      setQtd(qtd -1);
      setItemPrice(qtd * 14.99);
    }
    
  }

  const addQtd = () => {
    setQtd(qtd + 1);
    setItemPrice(qtd * 14.99);
  }

  return (
    <li>
      <div className={styles.CartItem}>
        <img src={img} alt={'item'} />

        <div>
          <Button onClick={removeQtd}>-</Button>
            <span>{qtd}</span>
          <Button onClick={addQtd}>+</Button>
        </div>

        <div>
          <h3>{title}</h3>
          <h3>{itemPrice}</h3>
        </div>
      </div>
    </li>
  )
}

export default CartItem
