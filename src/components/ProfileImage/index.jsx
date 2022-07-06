import React from 'react';
import './styles.css';

export function ProfileImage(props){
  return (
    <div className='profile_img'>
        <img src={props.imgUrl} alt="" />
    </div>
  );
}