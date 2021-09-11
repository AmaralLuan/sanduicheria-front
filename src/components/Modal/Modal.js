import React from "react";
import styles from "./Modal.module.css";

function Modal({ setModalOpen, children }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
          <div className={styles.titleCloseBtn}>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          {children}
        </div>
       
      </div>
  );
}

export default Modal;