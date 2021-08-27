import React from 'react';
import Button from '../Button/Button';
import styles from './Header.module.css';


function Header({setToken}) {

    const logout = () => {
        localStorage.removeItem('@Sanduicheria:user')
        setToken(null);
    }

  return (
    <header className={styles.Header}>
      <h2>Burgão lanches</h2>

      <Button onClick={logout}>Logout</Button>
    </header>
  )
}

export default Header