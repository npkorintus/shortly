import React from 'react';
import Image from 'next/image';

import illustrationWorking from '../../public/illustration-working.svg';

import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        {/* <div className='hero-image' style={{ background: `url(${workingImg})`}}></div> */}
        <Image className={styles.heroImage} alt='Illustration working' src={illustrationWorking} />
      </div>
      <div className={styles.headingContainer}>
        <h1 className={styles.heroHeading}>More than just shorter links</h1>
        <p className={styles.heroSubheading}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <div className={styles.buttonContainer}>
          <button className='btn-round'>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
