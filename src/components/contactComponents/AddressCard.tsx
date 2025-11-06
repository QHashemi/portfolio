import React from 'react'
import styles from "./style.module.scss"
import { FaMapLocationDot } from "react-icons/fa6";
export default function AddressCard() {
  return (
    <div className={styles.address_card}>

      <div className={styles.icon}>
        <FaMapLocationDot />
      </div>
      <div className={styles.icon_text}>
        <strong>Address</strong>
        <p>Brucknerstarße 7a /7, 4320 Perg</p>
      </div>

    </div>
  )
}
