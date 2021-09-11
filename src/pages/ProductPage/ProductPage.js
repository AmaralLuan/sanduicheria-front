import React, {useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import styles from './ProductPage.module.css';
import {useParams, useHistory} from 'react-router-dom';
import Axios from 'axios';

function ProductPage({token, addProduct}) {
  const history = useHistory();
  const {id} = useParams();
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('')

  const previousPage = () => {
    history.push('/products');
  }

  useEffect(() => {
    Axios.get(`http://localhost:5000/products/getProduct/` + id, {
      headers: {
        authorization: `bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data)
      setImg(response.data[0].product_img);
      setTitle(response.data[0].product_name);
      setDescription(response.data[0].product_description);
      setPrice(response.data[0].product_price);
    })
  }, [])

  const item = {
    img: img,
    title: title,
    price: price
  }

  return (
    <div className={styles.ProductPage}>
      <div className={styles.ProductPageTitle}>
        <h1>Página de Produto</h1>

        <Button onClick={previousPage}>Voltar</Button>
      </div>  

      <div>
        <img src={img} alt={'product'} />
      </div>

      <div>
        <h1>{title}</h1>

        <p>{description}</p>

        <div>
          <Button onClick={addProduct}>
            Adicionar &nbsp;
            {price}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
