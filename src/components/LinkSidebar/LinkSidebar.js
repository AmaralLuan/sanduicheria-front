import React from 'react'
import styles from './LinkSidebar.module.css'

function LinkSidebar(props) {
  return (
      <button href={props.href} 
              onClick={props.onClick} 
              className={styles.LinkSidebar}>
        {props.children}
      </button>
  )
}

export default LinkSidebar
