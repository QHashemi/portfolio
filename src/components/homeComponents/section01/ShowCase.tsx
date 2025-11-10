"use client";
import React from "react";
import styles from "../style.module.scss";
import Link from "next/link";

export default function ShowCase() {
  return (
    <section className={styles.showCase}>
      <div className={styles.showCaseContent}>
        <div className={styles.left}>
          <h1>
            Fullstack Developer <br />
            <span>IT-Administrator</span>
          </h1>
          <p>
            Bridging code and infrastructure, IT administration and full-stack development combine to create scalable, secure systems and applications that power the digital world.<br />
            The harmony between maintaining reliable networks and building dynamic web solutions ensures smooth performance across platforms.<br />
            Automation, cloud technologies, and innovative software practices amplify efficiency and resilience, shaping the way people and organizations interact with technology.<br />
            Together, these disciplines drive progress, unlock new possibilities, and have a lasting impact on the ever-evolving world of technology.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}><Link href="/about">About Me</Link></button>
          </div>
        </div>


        {/* <div className={styles.right}>
          <div className={styles.container}>
            
          </div>
        </div> */}
      </div>
    </section>
  );
}
