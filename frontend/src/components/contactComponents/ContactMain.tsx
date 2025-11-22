import React from 'react'
import styles from "./style.module.scss"
import EmailCard from './EmailCard'
import AddressCard from './AddressCard'
import PhoneCard from './PhoneCard'
import TitleText from './TitleText'
import MapSection from './MapSection'
import Form from './Form'
import SocialMedia from '../globalComponents/SocialMedia'


export default function Main() {
  return (
    <div className={styles.main_container}>
      <div className={styles.showCase}>
        <TitleText />
      </div>
      <div className={styles.section_1}>

        <div className={styles.contact_info}>
          <h2>Send me a message!</h2>
          <p>
            I’m always open to discussing new projects, creative ideas, or opportunities
            to collaborate on innovative solutions.
          </p>
          <EmailCard />
          <AddressCard />
          <PhoneCard />
          <SocialMedia />

        </div>

        <div className={styles.form_container}>
          {/* <UserInfo /> */}
          <Form />
        </div>

      </div>
      <div className={styles.section_2}>
        <MapSection />
      </div>


    </div>
  )
}
