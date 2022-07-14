import React from 'react';
import styles from './styles.module.css'
import IgniteLogo from '../../SVG/IgniteSimbol.svg';

export function NavBar(){
  return (
    <div className={styles.container}>
        <div className={styles.appName}>
            <img src={IgniteLogo} alt="React Logo" />
            <h1>Ignite Feed</h1>
        </div>
    </div>
  );
}