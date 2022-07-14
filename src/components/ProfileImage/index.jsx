import React from 'react';
import styles from './styles.module.css'

export function ProfileImage(props){
  let HasBorder = props.HasBorder
  return (
    <div className={HasBorder == true ? styles.HasBorder : styles.NoBorder}>
        <img src={props.imgUrl} alt="" />
    </div>
  );
}