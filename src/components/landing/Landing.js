import React, { useRef, useState } from 'react';

import styles from './Landing.module.scss';

import { ReactComponent as Italy } from '../../assets/imgs/colosseum.svg';
import { ReactComponent as Australia } from '../../assets/imgs/sydney-opera-house.svg';
import { ReactComponent as Japan } from '../../assets/imgs/osaka.svg';
import { ReactComponent as London } from '../../assets/imgs/gherkin.svg';

const places = [
  <Australia className={styles.animBox__img} />,
  <Japan className={styles.animBox__img} />,
  <London className={styles.animBox__img} />,
  <Italy className={styles.animBox__img} />
];

const Landing = () => {
  const [svg, setsvg] = useState(places[0]);
  const [anim, setanim] = useState(`${styles.anim}`);
  const navRef = useRef();
  const holeRef = useRef();

  const onShowDot = e => {
    const list = navRef.current.getElementsByClassName(`${styles.active}`);
    Object.keys(list).forEach(i => {
      if (list[i]) {
        list[i].classList.remove(`${styles.active}`);
      }
    });

    e.target.classList.add(`${styles.active}`);
    setsvg(places[e.target.id]);
    setanim(`${styles.anim}`);

  };
  return (
    <div className={styles.landing}>
      <div className={styles.landing__info}>
        <p className={styles.landing__txt}>
          travel across the world with comfort and ease
        </p>
        <a className={styles.landing__btn} href='#'>
          discover more
        </a>
      </div>
      {/* circle animation box */}
      <div className={styles.animBox}>
        <div
          onAnimationEnd={() => setanim(null)}
          ref={holeRef}
          className={`${styles.animBox__hole} ${anim}`}
        >
          {svg}
        </div>
      </div>
      {/* circle animation box end*/}
      <div className={styles.landing__navBox}>
        <div className={styles.circle}></div>
        <div ref={navRef} className={styles.landing__nav}>
          <p
            onClick={onShowDot}
            id='0'  
            className={`${styles.landing__link} ${styles.active}`}
          >
            australia
          </p>
          <p onClick={onShowDot} id='1' className={styles.landing__link}>
            japan
          </p>
          <p onClick={onShowDot} id='2' className={styles.landing__link}>
            london
          </p>
          <p onClick={onShowDot} id='3' className={styles.landing__link}>
            italy
          </p>
        </div>
        <div className={styles.landing__socialBox}>
          <a className={styles.landing__socialLink} href='#'>
            facebook
          </a>
          <a className={styles.landing__socialLink} href='#'>
            twitter
          </a>
          <a className={styles.landing__socialLink} href='#'>
            instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
