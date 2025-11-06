import React from 'react'
import styles from "./style.module.scss"
import contactImage from "@assets/images/contact-image.svg"
export default function UserInfo() {
  return (
    <div className={styles.user_info}>
        <img src={contactImage.src} />
    </div>
  )
}
