import React from 'react';
import Image from 'next/image';

import iconFacebook from '../../public/icon-facebook.svg';
import iconInstagram from '../../public/icon-instagram.svg';
import iconPinterest from '../../public/icon-pinterest.svg';
import iconTwitter from '../../public/icon-twitter.svg';

import styles from '../styles/Footer.module.css';

const socials = [];

function Footer() {
  return (
    <footer className={styles.footer} style={{ background: 'hsl(260, 8%, 14%)' }}>
      <div className={styles.logoContainer}>
        {/* <img className='header-image' alt='shortly logo' src={shortlyLogo} /> */}
        <h2 style={{ color: 'white' }}>Shortly</h2>
      </div>
      <div className={styles.list}>
        <div className={styles.sublist}>
          <h4 style={{ margin: 0, color: 'white' }}>Features</h4>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className={styles.sublist}>
          <h4 style={{ margin: 0, color: 'white' }}>Resources</h4>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className={styles.sublist}>
          <h4 style={{ margin: 0, color: 'white' }}>Company</h4>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <i className={styles.socialIcon}><Image alt='Facebook icon' src={iconFacebook} /></i>
        <i className={styles.socialIcon}><Image alt='Twitter icon' src={iconTwitter} /></i>
        <i className={styles.socialIcon}><Image alt='Pinterest icon' src={iconPinterest} /></i>
        <i className={styles.socialIcon}><Image alt='Instagram icon' src={iconInstagram} /></i>
      </div>
    </footer>
  );
}

export default Footer;
