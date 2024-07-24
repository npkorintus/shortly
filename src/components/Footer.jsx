import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer(props) {
  const { sitemap, socials } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        {/* <img className='header-image' alt='shortly logo' src={shortlyLogo} /> */}
        <h2 style={{ color: 'white' }}>Shortly</h2>
      </div>
      <div className={styles.sitemap}>
        {sitemap.map(group => (
          <div key={group.category} className={styles.category}>
            <h4 style={{ margin: 0, color: 'white' }}>{group.category}</h4>
            {group.links.map(link => (<p key={link}>{link}</p>))}
          </div>
        ))}
      </div>
      <div className={styles.socialLinks}>
        {socials.map(social => (
          <i key={social.id} className={styles.socialIcon}>
            <img alt={`${social.name} icon`} src={social.icon} />
          </i>
        ))}
      </div>
    </footer>
  );
}
