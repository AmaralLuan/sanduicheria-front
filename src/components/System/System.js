import React from 'react'
import styles from './System.module.css'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header';
import LinkSidebar from '../LinkSidebar/LinkSidebar';
import { useHistory } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard/Dashboard';


function System({setToken}) {
  const history = useHistory();

  return (
    <section className={styles.System}>
      <Header setToken={setToken}/>
    
      <main>
        <Sidebar>
          <LinkSidebar onClick={() => history.push('/products')}>
            <span>Produtos</span>
          </LinkSidebar>

          
        </Sidebar>

        <Dashboard />  
      </main>
      
    </section>
  )
}

export default System
