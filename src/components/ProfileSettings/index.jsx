import React from 'react';
import './styles.css';
import { ProfileImage } from './../ProfileImage/index';
import PenButton from '../../SVG/Vector.svg';
import UserIMG from '../../IMG/Rectangle4240.png';

export function ProfileSettings(){
  return (
    <div className='Profile_Set_Box'>
      <img src={UserIMG} alt="" />
        <div className='Profile_Set_imgName'>
          <div className="ComponentImg" >
            <ProfileImage imgUrl="https://github.com/ViniOliver01.png"/>
          </div>
          <div className='Profile_Set_name'>
            <h2>Jane Cooper</h2>
            <h3>Dev Front-End</h3>
          </div>
        </div>
          
        <div className='Profile_Set_bar_line'/>
        
        <button><img src={PenButton}/>Editar seu perfil</button>
    </div>
  );
}