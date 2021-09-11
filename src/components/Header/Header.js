import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './Header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/all';
import Cart from '../Cart/Cart';


function Header({setToken}) {
    const [modalOpen, setModalOpen] = useState(false)

    const logout = () => {
        localStorage.removeItem('@Sanduicheria:user')
        setToken(null);
    }

  return (

    <>
      <header className={styles.Header}>
        <h2>Burgão lanches</h2>

        <div className={styles.HeaderButtons}>
          <Button onClick ={setModalOpen}><AiOutlineShoppingCart />&nbsp;Seu Carrinho</Button>

          <Button onClick={logout}>Logout</Button>
        </div>

      </header>

      {modalOpen && 
        <Modal setModalOpen={setModalOpen}>
          <Cart />
        </Modal>}

    </>
  )
}

export default Header