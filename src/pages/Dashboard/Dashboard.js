import React from 'react'
import Products from '../Products/Products';
import styles from './Dashboard.module.css';
import { Route, Switch } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage';

function Dashboard() {

  const addProduct = () => {
    alert('item adicionado!')
  }

  return (
    <main className={styles.Dashboard}>
  
      <Switch>
          <Route path='/products/:id' render ={() => <ProductPage  addProduct={addProduct}/>} />
          <Route path='/products' render={() => <Products />} />
      </Switch>
    </main>
  )
}

export default Dashboard
