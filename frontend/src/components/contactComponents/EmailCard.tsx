import React from 'react'
import styles from "./style.module.scss"
import { MdEmail } from "react-icons/md";
export default function EmailCard() {
  return (
    <div className={styles.email_card}>
           <div className={styles.icon}>
        <MdEmail />
      </div>

      <div className={styles.icon_text}>
        <strong>Email</strong>
        <p>q.hashemi100@gmail.com</p>
      </div>

    </div>
  )
}
