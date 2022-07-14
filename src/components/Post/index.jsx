import React from 'react';
import styles from './styles.module.css'
import { ProfileImage } from '../ProfileImage/index';
import { Comments } from './../Comments/index';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const comentario =[
  {
    id: 0,
    name: 'Diego',
    avatarUrl:'https://github.com/diego3g.png',
    owner: false,
    time: '2h',
    commentary: 'Parabens',
    likes: '3',
  },
  {
    id: 1,
    name: 'Vinicius',
    avatarUrl:'https://github.com/vinioliver01.png',
    owner: true,
    time: '1h',
    commentary: 'Parabens Zé',
    likes: '7',
  }
]




export function Post({author, content, publishedAt, commentId}){
  const dateISO = publishedAt.toISOString();
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:MM'h'", {
    locale: ptBR,
  })
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div className={styles.container}>
        <div className={styles.profileInfo}>
            <ProfileImage HasBorder imgUrl={author.avatarUrl}/>
            <div className={styles.profileName}>
                <h2>{author.name}</h2>
                <h3>{author.role}</h3>
            </div>
            <h3 title={publishedDateFormatted} dateTime={dateISO}>Públicado {publishedDateRelativeNow}</h3>
        </div>

        <div className={styles.Post_content}>
          {content.map(line =>{
            if(line.type == 'paragraph'){
              return <div><p>{line.content}</p><br/></div>;
            }
            if(line.type == 'link'){
              return <div><p><a href='#'>{line.content}</a></p><br/></div>;
            }
            if(line.type == 'hashtag'){
              return <div><p><a href='#'>{line.content}</a></p><br/></div>;
            }
          })}
        </div>
        <div className={styles.barLine}/>
        <div className={styles.feedbackArea}>
            <h2>Deixe seu feedback</h2>
            <textarea type="text" placeholder='Escreva um comentário...'/>
            <div className={styles.Button_Area}>
              <button>Publicar</button>
            </div>
        </div>
        <div className={styles.coment_area}>
            {commentId.map(id =>{
              return (
                <Comments 
                name={comentario[id].name} 
                img={comentario[id].avatarUrl} 
                me={comentario[id].owner} 
                time={comentario[id].time} 
                comment={comentario[id].commentary} 
                likes={comentario[id].likes}
              />
              )
            })}
        </div>
    </div>
  );
}