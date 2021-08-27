import React from 'react'
import styles from './Input.module.css';

function Input(props) {
  return (
      <label className={styles.Input}>{props.children}

        <input type={props.type} 
        placeholder={props.placeholder} 
        onChange={props.onChange}
        required={props.required}
        />
      </label>
  )
}

export default Input
