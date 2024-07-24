import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero(props) {
  const { heading, subheading, buttonText, image } = props;

  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <img className={styles.heroImage} alt='Illustration working' src={image} />
      </div>
      <div className={styles.headingContainer}>
        <h1 className={styles.heroHeading}>{heading}</h1>
        <p className={styles.heroSubheading}>{subheading}</p>
        {buttonText ? (
          <div className={styles.buttonContainer}>
            <button className='btn-round'>{buttonText}</button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
