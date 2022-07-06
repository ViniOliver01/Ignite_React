import React from 'react';
import './styles.css';
import { ProfileImage } from '../ProfileImage/index';
import { Comments } from './../Comments/index';

export function Post(porps){
  return (
    <div className='Post_container'>
        <div className='profile_info'>
            <ProfileImage imgUrl="https://github.com/ViniOliver01.png"/>
            <div className='profile_name'>
                <h2>Jane Cooper</h2>
                <h3>Dev Front-End</h3>
            </div>
            <h3>Públicado há 1h</h3>
        </div>

        <div className='Post_content'>
                Fala galeraa 👋<br/>
                <br/>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀<br/>
                <br/>
                👉 jane.design/doctorcare<br/>
                <br/>
                #novoprojeto #nlw #rocketseat<br/>
        </div>
        <div className='bar_line_1'/>
        <div className='feedback_area'>
            <h2>Deixe seu feedback</h2>
            <textarea type="text" placeholder='Escreva um comentário...'/>
            <button>Publicar</button>
        </div>
        <div className='coment_area'>
          <Comments name ='Devon Jane' img='https://github.com/ViniOliver01.png' me='true' time='2h' comment='Muito bom Vinicius, parabéns!! 👏👏' likes='3'/>
          <Comments name ='Devon Jane' img='https://github.com/ViniOliver01.png' me='true' time='2h' comment='Muito bom Vinicius, parabéns!! 👏👏' likes='3'/>
        </div>
    </div>
  );
}