import React, { useEffect, useState } from 'react'
import styles from './Products.module.css';

import Axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

function Products({token}) {
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:5000/products/getProducts', {
      headers: {
        authorization: `bearer ${token}`
      }
    }).then((response) => {
      setData(response.data);
    })
  }, [])

  return (
    <section className={styles.Products}>

      <h1>Produtos</h1>

      <ul>
        {
          Array.isArray(data) ? data.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`} >
                <ProductCard
                  img={product.product_img}
                  title={product.product_name}
                  description={product.product_description}
                  price={product.product_price}
                  />
                  
              </Link>  
            </li>
          )) : null}
      </ul>
    </section>
  )

  
}


export default Products
