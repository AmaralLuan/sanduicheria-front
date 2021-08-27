import React from 'react'
import Products from '../Products/Products';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.Dashboard}>
      <Products />
    </main>
  )
}

export default Dashboard
