import React from 'react'
import styles from "../style.module.scss"
import SocialMedia from '@components/globalComponents/SocialMedia'

export default function RightSide() {
  return (
    <div className={styles.rightSide}>
      <h1>
        <span>Hello, I’m </span>
        <span>Qasem Hashemi</span>
      </h1>
      <h2>Fullstack Developer & IT Administrator</h2>
      <p>
        I’m a passionate IT specialist and software developer with a focus on
        system administration, automation, and full-stack development. I build
        efficient software solutions and automate workflows to enhance
        performance and reliability.
        <br /><br />
        Skilled in servers, networks, databases, and web technologies, I enjoy
        creating scalable and secure systems. My background in media and system
        engineering provides a solid foundation in both hardware and software.
        <br /><br />
        Constantly learning in areas like AI, DevOps, and modern architectures,
        I’m driven by curiosity and precision to deliver smart, effective, and
        future-ready IT solutions.
      </p>
      <SocialMedia />
    </div>
  )
}
