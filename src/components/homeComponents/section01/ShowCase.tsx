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
            Bridging code and infrastructure — building scalable web applications,
            maintaining secure networks, and ensuring smooth, reliable performance across systems.
            Passionate about automation, cloud technologies, and crafting solutions that make a difference.
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
