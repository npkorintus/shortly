import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img alt={data.altText} src={data.image} />
      </div>
      <h3 className={styles.cardHeading}>{data.heading}</h3>
      <p className={styles.cardContent}>{data.content}</p>
    </div>
  );
}
