import React from 'react';
import styles from "./style.module.scss";

export default function MapSection() {
  return (
    <div className={styles.map}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42510.61182945082!2d14.596254996488497!3d48.24679756063926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773b1f517f0c88b%3A0x40097572de64f20!2sPerg!5e0!3m2!1sde!2sat!4v1761774183968!5m2!1sde!2sat" 
        loading="lazy" 
      ></iframe>
    </div>
  )
}
