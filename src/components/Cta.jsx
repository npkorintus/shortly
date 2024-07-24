import React from 'react';
import styles from '../styles/Cta.module.css';

export default function Cta(props) {
  const { heading, btnText } = props;

  return (
    <div className={styles.cta}>
      <div className={styles.ctaContent}>
        <h3 className={styles.ctaHeading}>{heading}</h3>
        <button className='btnRound'>{btnText}</button>
      </div>
    </div>
  );
}
