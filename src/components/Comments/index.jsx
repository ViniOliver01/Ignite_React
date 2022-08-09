import React from 'react';
import {useState} from 'react';
import styles from './styles.module.css'
import { ProfileImage } from './../ProfileImage/index';

import { Trash } from 'phosphor-react'
import { HandsClapping } from 'phosphor-react'
  
export function Comments({id, name, img, me, time, comment, likes, onDeleteComment}){
  const [likeCount, setLikeCount] = useState(0);


  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  };

  function handleDeleteComment (){
    onDeleteComment(id)
  }


  return (
    <div className={styles.container}>
        <ProfileImage imgUrl={img}/>
        <div className={styles.commentBox}>
          <div className={styles.commentArea}>
              <div className={styles.commentArea1}>
                  <h1>{name}</h1> 
                  <h2>{(me == true ? '(Você)' : null)}</h2>
                  <a onClick={handleDeleteComment}><Trash size={24} /></a>
              </div>
              <h2>Cerca de {time}</h2> <br/>
              <p>{comment}</p>
          </div>

          <div className={styles.likeButton} onClick={handleLikeComment} style={likeCount > 0 ? {"color": "#00b37e"} : null}>
              <HandsClapping size={20} />
              <span>Aplaudir</span>
              <p>{likeCount}</p>
          </div>
          
        </div>
    </div>
  );
}