import React from 'react';

import styles from './App.module.scss';

import Header from './components/Header.js/Header';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Landing />
    </div>
  );
}

export default App;
