import React from 'react'
import styles from './ProductCard.module.css'
import xfrango from '../../assets/xfrango.png';
import Button from '../Button/Button';

function ProductCard(props) {
  return (
    <div className={styles.ProductCard}>
      <header>
        <h2>{props.title}</h2>
      </header>

      <main>
        <img src={props.img} alt={props.alt} />
        <span>{props.description}</span>
      </main>

      <footer>        
        <h2>R$ {props.price}</h2>
        <Button>Comprar</Button>
      </footer>  
    </div>
  )
}

export default ProductCard
