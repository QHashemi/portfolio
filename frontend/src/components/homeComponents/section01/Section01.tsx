import React from "react";

import ShowCase from "./ShowCase";
import styles from "../style.module.scss";
import Skills from "./Skills";

export default function Section01() {
  return (
    <section className={styles.section01} >

      <div className={styles.overlay2}></div>

      <div className={styles.sectionContent}>
        <ShowCase />

      </div>
          <Skills />
    </section>
  );
}
