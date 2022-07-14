import React from 'react';
import styles from './styles.module.css';
import { NavBar } from './../../components/NavBar/index';
import { Post } from '../../components/Post';
import { ProfileSettings } from '../../components/ProfileSettings';


const posts = [
  {
    id: 0,
    author:{
      avatarUrl: 'https://github.com/vinioliver01.png',
      name: 'Vinicius',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'hashtag', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-07-11 20:53:00'),
    commentId: [0,1]
  },
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Rocket CTO',
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'hashtag', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-07-13 18:53:00'),
    commentId: [0]
  }
];


export function Home(){

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.asside}>
          <ProfileSettings />
        </div>
        <div className={styles.body}>
          {posts.map(post =>{
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              commentId={post.commentId}
              />
            )
          })}
        </div>
      </div>
      
      
      
    </div>
  );
}