import React from 'react'
import styles from "./style.module.scss"
import { FaMobile } from "react-icons/fa6";

export default function PhoneCard() {
  return (
    <div className={styles.phone_card}>
      <div className={styles.icon}>
        <FaMobile />
      </div>

      <div className={styles.icon_text}>
        <strong>Mobile</strong>
        <p>+43 681 106 841 68</p>
      </div>

    </div>
  )
}
