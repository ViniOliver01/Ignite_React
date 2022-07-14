import React from 'react';
import {useState} from 'react';
import styles from './styles.module.css'
import { ProfileImage } from './../ProfileImage/index';

import { Trash } from 'phosphor-react'
import { HandsClapping } from 'phosphor-react'
  
export function Comments(props){
  const [isActive, setIsActive] = useState(false);


  const handleClick = () => {
    setIsActive(current => !current);
  };


  return (
    <div className={styles.container}>
        <ProfileImage imgUrl={props.img}/>
        <div className={styles.commentBox}>
          <div className={styles.commentArea}>
              <div className={styles.commentArea1}>
                  <h1>{props.name}</h1> 
                  <h2>{(props.me == 'true' ? '(Você)' : null)}</h2>
                  <a><Trash size={24} /></a>
              </div>
              <h2>Cerca de {props.time}</h2> <br/>
              <p>{props.comment}</p>
          </div>

          <div className={styles.linkArea}  
          style={{
          color: isActive ? 'var(--grenn-300)' : '',
          }} 
          onClick={handleClick}>
              <HandsClapping size={20} />
              <span>Aplaudir</span>
              <p>{isActive ? Number(props.likes)+1 : props.likes}</p>
          </div>
          
        </div>
    </div>
  );
}