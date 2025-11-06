import React from 'react'
import styles from "./style.module.scss"
import SocialMedia from './SocialMedia'

export default function globalFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <p>© 2025 Qasem Hashemi • Designed & Built with ❤️ and Next.js</p>
        <p className="footer-note">Let’s connect and create something amazing!</p>
        <SocialMedia />
      </div>
    </footer>
  )
}
