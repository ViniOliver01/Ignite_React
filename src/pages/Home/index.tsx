import { NavBar } from '../../components/NavBar/index';
import { Post } from '../../components/Post';
import { ProfileSettings } from '../../components/ProfileSettings';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';

interface HomeProps {
  user: string;
  photo: string;
}

const loggedUser = {
    userName: 'Vinicius',
    userPhoto:'https://github.com/vinioliver01.png',
  }

const url = "http://localhost:3333"

export function Home(){
  const [listPost, setListPost] = useState([])

  useEffect(() => {
    fetch(`${url}/posts`)
    .then(response => response.json())
    .then(data => {
      if(listPost.length==0) {
        setListPost(data.map(item => item))
      }
    })
    
  }, [])

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.asside}>
          <ProfileSettings user={loggedUser.userName} photo={loggedUser.userPhoto}/>
        </div>
        <div className={styles.body}>
          
          {listPost.map(post =>{
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={new Date(post.publishedAt)}
              commentId={post.commentId}
              userName={loggedUser.userName}
              userPhoto={loggedUser.userPhoto}
              />
              
            )
          })}
        </div>
      </div>
      
      
      
    </div>
  );
}