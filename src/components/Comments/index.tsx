import {useState} from 'react';
import { ProfileImage } from '../ProfileImage/index';

import styles from './styles.module.css'

import { Trash } from 'phosphor-react'
import { HandsClapping } from 'phosphor-react'

interface CommentsProps {
  id: number;
  name: string;
  img: string;
  me: boolean;
  time: string;
  comment: string;
  onDeleteComment: (id:number) => void;
}
  
export function Comments({id, name, img, me, time, comment, onDeleteComment}: CommentsProps){
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  };

  function handleDeleteComment (){
    onDeleteComment(id)
  }

  return (
    <div className={styles.container}>
        <ProfileImage src={img}/>
        <div className={styles.commentBox}>
          <div className={styles.commentArea}>
              <div className={styles.commentArea1}>
                  <h1>{name}</h1> 
                  <h4>{(me == true ? '(Você)' : null)}</h4>
                  <a onClick={handleDeleteComment}><Trash size={24} /></a>
              </div>
              <div className={styles.commentArea2}>
                <h3>Cerca de {time}</h3> <br/>
                <p>{comment}</p>
              </div>
          </div>

          <div className={styles.likeButton} onClick={handleLikeComment}>
              <HandsClapping size={20} />
              <span>Aplaudir</span>
              <p>{likeCount}</p>
          </div>
          
        </div>
    </div>
  );
}