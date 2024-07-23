import React from 'react';
import styles from '../styles/Cta.module.css';

export default function Cta({ data }) {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaContent}>
        <h3 className={styles.ctaHeading}>{data.heading}</h3>
        <button className='btnRound'>{data.btnText}</button>
      </div>
    </div>
  );
}
