import React from 'react';

import styles from './Header.module.scss';

import { ReactComponent as Airplane } from '../../assets/icons/airplane.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <Airplane className={styles.header__logo} />
        <p className={styles.header__logoTxt}>travel</p>
      </div>

      <nav className={styles.header__nav}>
        <a className={styles.header__link} href='#'>
          location
        </a>
        <a className={styles.header__link} href='#'>
          register
        </a>
      </nav>
    </header>
  );
};

export default Header;
