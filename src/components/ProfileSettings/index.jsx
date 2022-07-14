import React from 'react';
import { ProfileImage } from './../ProfileImage/index';
import PenButton from '../../SVG/Vector.svg';
import UserIMG from '../../IMG/Rectangle4240.png';
import styles from './styles.module.css'
import { PencilSimpleLine } from 'phosphor-react'

export function ProfileSettings(){
  return (
    <div className={styles.container}>
      <img src={UserIMG} alt="" />
      <div className={styles.imgComponent} >
        <ProfileImage HasBorder imgUrl="https://github.com/ViniOliver01.png"/>
      </div>
      <div className={styles.profileName}>
        <h2>Jane Cooper</h2>
        <h3>Dev Front-End</h3>
      </div>
          
        <div className={styles.barLine}/>
        
        <button><PencilSimpleLine size={20} />Editar seu perfil</button>
    </div>
  );
}