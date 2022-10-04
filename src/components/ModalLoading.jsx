import React from 'react'
import styles from "./modal.module.scss"

function ModalLoading() {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loadingView}>
            loading...
        </div>
    </div>
  )
}

export default ModalLoading
