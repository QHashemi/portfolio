import React from 'react';
import styles from './styles.module.scss';

export default function MainProjects() {
  return (
    <div className={styles.container}>
      <h1>🚧 Coming Soon</h1>
      <p>
        I’m currently working on exciting new projects — check back soon to see what’s next!
      </p>
      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}
