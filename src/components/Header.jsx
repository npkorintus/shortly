import React from 'react';
import Image from 'next/image';

import styles from '../styles/Header.module.css';
import shortlyLogo from '../../public/logo.svg';

function Header() {
  return (
    <header className='header'>
        <div className={`${styles.logoContainer} alignLeft`}>
          <Image alt='shortly-logo' src={shortlyLogo} />
        </div>
        {/* Todo: nav links with login/signup */}
      </header>
  );
}

export default Header;
