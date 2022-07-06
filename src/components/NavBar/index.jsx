import React from 'react';
import './styles.css';
import IgniteLogo from '../../SVG/IgniteSimbol.svg';

export function NavBar(){
  return (
    <div className='NavBar_container'>
        <div>
            <img src={IgniteLogo} alt="React Logo" />
            <h1>Ignite Feed</h1>
        </div>
    </div>
  );
}