import React from 'react'
import styles from './Sidebar.module.css'

function Sidebar(props) {
  return (
    <aside className={styles.Sidebar}>
      {props.children}
    </aside>
  )
}

export default Sidebar
