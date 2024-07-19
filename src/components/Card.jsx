import React from 'react';
import Image from 'next/image';

import styles from '../styles/Card.module.css';

export default function Card(props) {
  const { image, altText, heading, content } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image alt={altText} src={image} />
      </div>
      <h3 className={styles.cardHeading}>{heading}</h3>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
}
