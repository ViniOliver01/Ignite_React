import React from 'react';
import './styles.css';
import TrashIcon from '../../SVG/trash.svg'
import Aplaudir from '../../SVG/Aplaudir.svg'

export function Comments(props){
  function clickLike(){
      console.log("clicked");
  }
  
  return (
    <div className='Comments_Container'>
        <img src={props.img} alt="Profile Img" />
        <div className='Comment-box'>
          <div className='Comment_area'>
              <div className='Comment_area_1'>
                  <h1>{props.name}</h1> 
                  <h2>{(props.me == 'true' ? '(Você)' : null)}</h2>
                  <img src={TrashIcon} alt="" />
              </div>
              <h2>Cerca de {props.time}</h2> <br/>
              <p>{props.comment}</p>
          </div>
          <div className='Like-area' onClick={clickLike} >
            <img src={Aplaudir} alt="" />
            <p >Aplaudir - {props.likes}</p>
          </div>
        </div>
    </div>
  );
}