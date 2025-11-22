import React from 'react'
import styles from "../style.module.scss"
export default function LeftSide() {
  return (
    <div className={styles.leftSide}>
        <div className={styles.welcome}>This is me!</div>
      <div className={styles.image_container}></div>
    </div>
  )
}
