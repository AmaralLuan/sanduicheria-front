import React from 'react'
import styles from './System.module.css'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../../pages/Dashboard/Dashboard';
import Header from '../Header/Header';

function System({setToken}) {
  return (
    <section className={styles.System}>
      <Header setToken={setToken}/>
    
      <main>
        <Sidebar />

        <Dashboard />
      </main>
      
    </section>
  )
}

export default System
