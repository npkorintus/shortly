import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card(props) {
  const { heading, content, image, altText } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img alt={altText} src={image} />
      </div>
      <h3 className={styles.cardHeading}>{heading}</h3>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
}
